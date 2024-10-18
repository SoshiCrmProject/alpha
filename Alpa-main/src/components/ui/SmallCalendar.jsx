import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const SmallCalendar = () => {
  const events = [
    { title: 'Work Days Spent', start: new Date(2020, 9, 1), end: new Date(2020, 9, 10) },
    { title: 'Work Days Remaining', start: new Date(2020, 9, 12), end: new Date(2020, 9, 14) },
  ];

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 300 }}
    />
  );
};

export default SmallCalendar;
