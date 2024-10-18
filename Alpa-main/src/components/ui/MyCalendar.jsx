import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
    const [events, setEvents] = useState([]);

    const handleSelect = ({ start, end }) => {
        const title = window.prompt('New Event name');
        if (title) {
            setEvents([...events, { start, end, title }]);
        }
    };

    return (
        <Calendar
            localizer={localizer}
            events={events}
            selectable
            onSelectSlot={handleSelect}
            defaultView="month"
            style={{ height: 500 }}
        />
    );
};

export default MyCalendar;
