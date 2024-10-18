import React from 'react'
import { FaSearch, FaRegClock, FaAngleRight, FaAngleLeft, FaPlus } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import Select from '../../components/ui/Select'

const TimeCards = () => {
    return (
        <div className='md:px-8 px-5'>

            <div className='mt-3 flex items-center justify-between'>
                <h5 className='font-semibold text-gray-700 text-lg lg:mr-0 mr-3 whitespace-nowrap'>Time Cards</h5>
                <div className='flex items-center space-x-2 lg:space-y-0 space-y-2 text-sm flex-wrap'>
                    <div className='flex items-center border border-gray-300 rounded-full px-3 py-[3px] bg-transparent'>
                        <FaSearch className='text-gray-500' />
                        <input type="text" className='flex-1 px-3 py-[3px] border-none outline-none bg-transparent text-sm' placeholder='Search' />
                    </div>
                    <Select
                        label='By Time Card'
                        icon={<FaRegClock />}
                        options={['By Time Card', 'By Project', 'By Contact']}
                        onSelect={(i) => { console.log(i) }}
                        bg='bg-[#fcfcfc]'
                        color='text-gray-600'
                    />
                    <button className='bg-orange-400 text-white px-3 py-2 rounded-full'>Other Actions</button>
                    <button disabled className='bg-[#1C2852] text-white px-4 py-2 rounded-full'>Clear</button>
                </div>
            </div>

            <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center space-x-3'>
                    <FaAngleLeft className='text-2xl' />
                    <div className='flex flex-col items-center'>
                        <p className='text-lg'>10/07/2021 - 11/07/2021</p>
                        <p className='text-sm text-orange-400'>Manual Date Range</p>
                    </div>
                    <FaAngleRight className='text-2xl' />
                </div>
                <button className='bg-orange-400 text-white px-3 py-2 rounded-full text-sm flex items-center'>
                    <FaPlus className='mr-1' /> New Time Cards
                </button>
            </div>

            <div className='mt-7 mb-4 border rounded-md min-h-32 overflow-auto'>
                <table className='w-full filtered_table'>
                    <thead className='bg-gray-100 border-b'>
                        <tr className='px-3'>
                            <th>Project <IoMdArrowDropdown /></th>
                            <th>Company <IoMdArrowDropdown /></th>
                            <th>Contact <IoMdArrowDropdown /></th>
                            <th>Date <IoMdArrowDropdown /></th>
                            <th>Notes <IoMdArrowDropdown /></th>
                            <th>Reg Hours <IoMdArrowDropdown /></th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default TimeCards