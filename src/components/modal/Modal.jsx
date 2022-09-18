import React, { useState } from 'react';
import moment from 'moment/moment';
import { formatNewEvent, postEvent, getEvent } from '../../gateway/gateway';
import './modal.scss';

const Modal = ({ modalCloseBtnEvent, setEvents }) => {
  const [eventInput, setEventInput] = useState({
    title: '',
    date: moment(new Date()).format('YYYY-MM-DD'),
    description: '',
    startTime: moment().format('HH:mm'),
    endTime: moment().add(15, 'minutes').format('HH:mm'),
  });
  const { title, description, date, startTime, endTime } = eventInput;

  const showDefaultEvent = () => {
    setEventInput({
      title: '',
      date: moment(new Date()).format('YYYY-MM-DD'),
      description: '',
      startTime: moment().format('HH:mm'),
      endTime: moment().add(15, 'minutes').format('HH:mm'),
    });
  };

  const inputChangeHandler = e => {
    const { name, value } = e.target;
    setEventInput({ ...eventInput, [name]: value });
  };

  const createEvent = eventInput => {
    const newEvent = formatNewEvent(eventInput);
    postEvent(newEvent).then(() => getEvent(setEvents));
    showDefaultEvent(eventInput);
    modalCloseBtnEvent();
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={modalCloseBtnEvent}>
            +
          </button>
          <form
            className="event-form"
            onSubmit={e => {
              e.preventDefault();
              createEvent(eventInput);
            }}
          >
            <input
              type="text"
              name="title"
              placeholder={'Заголовок'}
              className="event-form__field"
              onChange={inputChangeHandler}
              value={title}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                onChange={inputChangeHandler}
                value={date}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                onChange={inputChangeHandler}
                value={startTime}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                onChange={inputChangeHandler}
                value={endTime}
              />
            </div>
            <textarea
              name="description"
              placeholder="Описание"
              className="event-form__field"
              onChange={inputChangeHandler}
              value={description}
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Создать
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
