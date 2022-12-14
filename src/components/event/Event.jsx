import React, { useState } from 'react';
import DeleteEventBtn from './DeleteEventBtn.jsx';
import './event.scss';

const Event = ({ height, marginTop, title, time, id, description, deleteEventHandler }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const [deleteBtn, setDeleteBtn] = useState(false);
  const deleteBtnHandler = () => {
    setDeleteBtn(!deleteBtn);
  };

  return (
    <div
      style={eventStyle}
      className="event"
      onPointerEnter={deleteBtnHandler}
      onPointerLeave={deleteBtnHandler}
    >
      {deleteBtn ? <DeleteEventBtn id={id} deleteEventHandler={deleteEventHandler} /> : null}
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      <div className="event__description">{description}</div>
    </div>
  );
};

export default Event;
