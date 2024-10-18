import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaSearch, FaPlus } from 'react-icons/fa'
import Select from '../../components/ui/Select'

const InspectionTemp = () => {
    return (
        <div className='md:px-10 px-6'>
            <div className='flex items-center justify-between border-b -pb-1 my-3'>
                <div className='flex space-x-6 items-center'>
                    <h5 className='font-semibold text-lg'>Inspection Template</h5>
                    <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to="/pm/inspection">List</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to="/pm/recycle">Recycle Bin</NavLink>
                </div>
                <button className='bg-orange-400 text-white px-3 py-1.5 text-sm rounded-full flex items-center -mt-2'>
                    <FaPlus className='mr-1' />Create
                </button>
            </div>
            <div>
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
                                <th>Name</th>
                                <th>Type</th>
                                <th>Trade</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array(5).fill(0).map((_, i) => (
                                <tr key={i}>
                                    <td className='text-center'>Alpa Checklist Completion</td>
                                    <td className='text-center'>Quality</td>
                                    <td className='text-center'>Equipment</td>
                                    <td className='flex justify-center items-center space-x-2'>
                                        <button className='border border-[#1C2852] text-[#1C2852] px-3 py-1 rounded-md'>Edit</button>
                                        <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>View</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default InspectionTemp