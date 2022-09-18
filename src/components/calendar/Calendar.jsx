import React from 'react';
import { getEvent, fetchDelete } from '../../gateway/gateway';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';

const Calendar = ({weekDates, events, setEvents}) => {
  const deleteEvent = (id) => {
    fetchDelete(id).then(() => getEvent(setEvents));
  };

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week 
            weekDates={weekDates} 
            events={events} 
            deleteEventHandler={deleteEvent} 
          />
        </div>
      </div>
    </section>
  );
}

export default Calendar;
