import React from 'react';
import Day from '../day/Day';
import moment from 'moment';
import RedLine from '../redLine/RedLine';
import './week.scss';

const Week = ({ weekDates, events, deleteEventHandler }) => (
  <div className="calendar__week">
    {weekDates.map(dayStart => {
      const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

      const dayEvents = events.filter(event => event.dateFrom > dayStart && event.dateTo < dayEnd);
      return (
        <Day
          key={dayStart.getDate()}
          dataDay={dayStart.toString()}
          dayEvents={dayEvents}
          deleteEventHandler={deleteEventHandler}
        >
          {moment(dayStart).format('LL') === moment(new Date()).format('LL') && <RedLine />}
        </Day>
      );
    })}
  </div>
);

export default Week;
