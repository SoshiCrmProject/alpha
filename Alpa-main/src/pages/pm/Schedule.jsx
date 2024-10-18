import React from 'react'
import { NavLink } from 'react-router-dom'
import Select from '../../components/ui/Select'
import { FaSearch } from 'react-icons/fa'

const Schedule = () => {
    return (
        <div className='md:px-10 px-6'>
            <div className='flex space-x-6 items-center border-b -pb-1'>
                <h5 className='font-semibold text-lg'>Project Schedule</h5>
                <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to="/pm/schedule">List</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to="/pm/gantt">Gantt</NavLink>
            </div>
            <div className='my-3'>
                <div className='flex justify-end items-center text-sm space-x-3'>
                    <div className='flex items-center border border-gray-300 rounded-full px-3 py-[3px] bg-transparent'>
                        <FaSearch className='text-gray-500' />
                        <input type="text" className='flex-1 px-3 py-[3px] border-none outline-none bg-transparent text-sm' placeholder='Search' />
                    </div>
                    <Select label='Add Filter' options={['']} />
                </div>
                <div className='border rounded-md mt-3 overflow-auto'>
                    <table className='w-full home_page_table'>
                        <thead className='bg-gray-100 border-b'>
                            <tr>
                                <th>ID</th>
                                <th>Project Name</th>
                                <th>Schedule Task</th>
                                <th>Calendar Items</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array(5).fill(0).map((_, i) => (
                                <tr key={i}>
                                    <td className='text-center'>132113</td>
                                    <td className='text-center'>Alpa Project Temp</td>
                                    <td className='text-center'>65</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Schedule