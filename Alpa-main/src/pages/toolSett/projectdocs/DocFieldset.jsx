import React from 'react'
import { Link } from 'react-router-dom'

const DocFieldset = () => {
    return (
        <div>
            <div className='mt-5 mb-3 flex justify-between items-center'>
                <p className='text-[0.83rem]'>Easily create, edit and assign fieldsets to standardize the way your company collects data across projects.<Link className='text-orange-400' to='/'> Learn More</Link></p>
                <button className='bg-orange-400 text-white px-2.5 py-1.5 rounded-full text-sm whitespace-nowrap ms-2'>Create Fieldset</button>
            </div>
            <div className='border rounded-md lg:overflow-hidden overflow-auto'>
                <table className='w-full project_default_table'>
                    <thead className='bg-gray-100 border-b'>
                        <th>Title</th>
                        <th>Last Modified</th>
                        <th>Default for new Project</th>
                        <th>Assigned Projects</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Change Events</td>
                            <td>9/25/23 at 8:30pm by soshi</td>
                            <td>set as default</td>
                            <td>0/1021 projects</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-3 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-2 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Change Events</td>
                            <td>9/25/23 at 8:30pm by soshi</td>
                            <td></td>
                            <td>0/1021 projects</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-3 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-2 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Change Events</td>
                            <td>9/25/23 at 8:30pm by soshi</td>
                            <td></td>
                            <td>0/1021 projects</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-3 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-2 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DocFieldset