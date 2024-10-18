import React from 'react'
import { FaSearch } from 'react-icons/fa'
import ToggleBtn from '../../components/ui/ToggleBtn'
import { IoMdArrowDropdown } from 'react-icons/io'

const ProjectInvites = () => {
    return (
        <div className='md:px-8 px-5'>
            <div className='my-3 flex items-center justify-between'>
                <h5 className='font-semibold text-gray-700 text-lg'>Project Invites</h5>
                <div className='flex items-center space-x-4 text-sm'>
                    <div className='flex items-center border border-gray-300 rounded-full px-3 py-[3px] bg-transparent'>
                        <FaSearch className='text-gray-500' />
                        <input type="text" className='flex-1 px-3 py-[3px] border-none outline-none bg-transparent text-sm' placeholder='Search' />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <p>Favorite:</p>
                        <ToggleBtn />
                    </div>
                    <button disabled className='bg-[#1C2852] text-white px-3 py-2 rounded-full'>Clear Filters</button>
                </div>
            </div>
            <div className='mt-7 mb-4 border rounded-md min-h-32 overflow-auto'>
                <table className='w-full filtered_table'>
                    <thead className='bg-gray-100 border-b'>
                        <tr>
                            <th>Name <IoMdArrowDropdown /></th>
                            <th>General Contractor <IoMdArrowDropdown /></th>
                            <th>City <IoMdArrowDropdown /></th>
                            <th>State <IoMdArrowDropdown /></th>
                            <th>Bids Due <IoMdArrowDropdown /></th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProjectInvites