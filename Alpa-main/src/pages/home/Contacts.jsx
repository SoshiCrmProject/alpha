import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import { BsPeople } from 'react-icons/bs'
import Select from '../../components/ui/Select'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { FaUserCheck } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'

const Contacts = () => {
    return (
        <div className='md:px-8 px-5'>

            <div className='mt-3 flex items-center justify-between'>
                <h5 className='font-semibold text-gray-700 text-lg lg:mr-0 mr-3'>Contacts</h5>
                <div className='flex items-center space-x-2 text-sm lg:flex-nowrap flex-wrap lg:space-y-0 space-y-2'>
                    <div className='flex items-center border border-gray-300 rounded-full px-3 py-[3px] bg-transparent'>
                        <FaSearch className='text-gray-500' />
                        <input type="text" className='flex-1 px-3 py-[3px] border-none outline-none bg-transparent text-sm' placeholder='Search' />
                    </div>
                    <Select
                        label='Trades By Contact'
                        icon={<BsPeople />}
                        options={['Trades By Company', 'Trades By Contact', 'Companies', 'Contacts']}
                        onSelect={(i) => { console.log(i) }}
                        bg='bg-[#fcfcfc]'
                        color='text-gray-600'
                    />
                    <button className='bg-orange-400 text-white px-3 py-2 rounded-full whitespace-nowrap'>Advance Search</button>
                    <button disabled className='bg-[#1C2852] text-white px-4 py-2 rounded-full'>Clear</button>
                </div>
            </div>
            <div className='flex justify-end items-center flex-wrap text-sm mt-3 space-x-2 lg:space-y-0 space-y-2'>
                <Select
                    label='Vendor, Subcontractor'
                    icon={<MdOutlineAccountCircle />}
                    options={['Vendor', 'Subcontractor', 'Architect', 'Owner']}
                    onSelect={(i) => { console.log(i) }}
                    bg='bg-[#fcfcfc]'
                    color='text-gray-600'
                />
                <Select
                    label='Approved'
                    icon={<FaUserCheck />}
                    options={['Approved', 'Unapproved']}
                    onSelect={(i) => { console.log(i) }}
                    bg='bg-[#fcfcfc]'
                    color='text-gray-600'
                />
                <Select
                    label='Work Areas'
                    icon={<FaMapMarkerAlt />}
                    options={['Work Areas', 'Office Location']}
                    onSelect={(i) => { console.log(i) }}
                    bg='bg-[#fcfcfc]'
                    color='text-gray-600'
                />
                <input type="text" className='px-4 py-2 border border-gray-200 rounded-full outline-none bg-[#fcfcfc] w-24 placeholder-gray-500' placeholder='Zip Code' />
                <Select
                    label='0 miles'
                    options={['0 miles', '5 miles', '10 miles', '15 miles', '20 miles']}
                    onSelect={(i) => { console.log(i) }}
                    bg='bg-[#fcfcfc]'
                    color='text-gray-600'
                />
                <button className='bg-orange-400 text-white px-3 py-2 rounded-full whitespace-nowrap'>All Trades</button>
            </div>

            <div className='mt-7 mb-4 border rounded-md min-h-32 overflow-auto'>
                <table className='w-full filtered_table'>
                    <thead className='bg-gray-100 border-b'>
                        <tr className='px-6'>
                            <th>Division <IoMdArrowDropdown /></th>
                            <th>Trades <IoMdArrowDropdown /></th>
                            <th>Contacts <IoMdArrowDropdown /></th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Contacts