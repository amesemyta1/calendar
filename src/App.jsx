import React, { useState, useEffect } from 'react';
import moment from 'moment/moment';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal';

import { getEvent } from './gateway/gateway';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
    const weekStartDate = new Date();
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
    const [weekDate, setWeekDate] = useState(weekDates);
    const [nowMonth, setNowMonth] = useState(moment(weekDate[6]).month());
    const [isVisible, setIsVisible] = useState(false);
    const [events, setEvents] = useState([]);

    const nextWeek = () => {
      setNowMonth(moment(weekDate[6]).month());
      setWeekDate(weekDate.map(day => moment(new Date(day)).add(7, 'days').toDate()));
    }
  
    const lastWeek = () => {
      setNowMonth(moment(weekDate[0]).month());
      setWeekDate(weekDate.map(day => moment(new Date(day)).subtract(7, 'days').toDate()));
    }

    const nowWeek = () => {
      setNowMonth(moment(weekDates[6]).month());
      setWeekDate(weekDates);
    }
    
    const modalBtnEvent = () => {
      isVisible ? setIsVisible(false) : setIsVisible(true);
    }
    
    useEffect(() => {
      getEvent(setEvents);
    }, []);
    console.log(events);

    return (
      <>
        <Header nextWeek={nextWeek} lastWeek={lastWeek} nowWeek={nowWeek} nowMonth={nowMonth} modalBtnEvent={modalBtnEvent} />
        <Calendar weekDates={weekDate} events={events} setEvents={setEvents} />
        {isVisible && <Modal modalCloseBtnEvent={modalBtnEvent} setEvents={setEvents} />}
      </>
    );
  }

export default App;
