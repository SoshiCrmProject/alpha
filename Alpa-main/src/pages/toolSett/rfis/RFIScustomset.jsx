import React from 'react'
import { FaSearch } from 'react-icons/fa'

const RFIScustomset = () => {
    return (
        <div>
            <div className='flex justify-end items-center space-x-3 mt-4'>
                <div className='flex items-center border border-gray-300 rounded-full px-3 py-[3px] bg-gray-100'>
                    <FaSearch className='text-gray-400' />
                    <input type="text" className='flex-1 px-3 py-[3px] border-none outline-none bg-gray-100' placeholder='Search' />
                </div>
                <button className='bg-orange-400 text-white px-2.5 py-1.5 rounded-full whitespace-nowrap'>Create Custom Field</button>
            </div>
            <div className='mt-4 border rounded-md lg:overflow-hidden overflow-auto'>
                <table className='w-full project_default_table'>
                    <thead className='bg-gray-100'>
                        <th>Field Name</th>
                        <th>Field Type</th>
                        <th>Assigned</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Time Requested</td>
                            <td>Number</td>
                            <td>0 Fieldsets</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-4 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Time Requested</td>
                            <td>Number</td>
                            <td>0 Fieldsets</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-4 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Time Requested</td>
                            <td>Number</td>
                            <td>0 Fieldsets</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-4 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='mt-3 flex justify-between text-sm'>
                <p>Last updated few seconds ago</p>
                <p>Pagination</p>
            </div>
        </div>
    )
}

export default RFIScustomset