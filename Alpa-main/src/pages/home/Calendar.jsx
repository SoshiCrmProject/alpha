import React from 'react'
import MyCalendar from '../../components/ui/MyCalendar'

const Calendar = () => {
    return (
        <div className='md:px-8 px-5'>
            <h5 className='font-semibold text-gray-700 text-xl mb-3'>Calendar</h5>
            <div className='w-full h-full overflow-hidden'>
                <MyCalendar />
            </div>
        </div>
    )
}

export default Calendar