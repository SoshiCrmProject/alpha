import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleDown } from 'react-icons/fa'

const Directory = () => {
    return (
        <div className='md:px-12 px-6'>
            <h3 className='font-semibold border-b pb-1 text-lg'>Directory</h3>
            <div className='flex justify-between items-center my-4'>
                <p className='text-[0.83rem]'>Easily create, edit and assign fieldsets to standardize the way your company collects data across projects. <Link className='text-orange-400' to='/'>Learn More</Link></p>
                <button className='bg-orange-400 text-white px-4 py-2 rounded-full text-sm flex items-center whitespace-nowrap'>
                    Create Fieldset <FaAngleDown className='ml-2' />
                </button>
            </div>
            <div className='border rounded-md lg:overflow-hidden overflow-auto'>
                <table className='w-full project_default_table'>
                    <thead className='bg-gray-100 border-b'>
                        <th>Title</th>
                        <th>Last Modified</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Person</td>
                            <td>No modifications have been made</td>
                        </tr>
                        <tr>
                            <td>Company</td>
                            <td>No modifications have been made</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Directory