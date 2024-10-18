import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Fieldset = () => {
    return (
        <div className='md:px-12 px-6'>
            <div className='flex space-x-6 border-b items-center pb-0'>
                <h3 className='font-semibold text-lg pb-1'>Default</h3>
                <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/project/fieldset'>Fieldset</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/project/custom-fieldset'>CustomFieldset</NavLink>
            </div>
            <div className='mt-3 mb-4 flex justify-between items-center'>
                <p className='text-[0.83rem]'>Easily create, edit and assign fieldsets to standardize the way your company collects data across projects. <Link className='text-orange-400' to='/'>Learn More</Link></p>
                <button className='bg-orange-400 text-white px-2.5 py-1.5 rounded-full text-sm'>Create Fieldset</button>
            </div>
            <div className='border rounded-md lg:overflow-hidden overflow-auto'>
                <table className='w-full project_default_table'>
                    <thead className='bg-gray-100'>
                        <tr>
                            <th>Project Title</th>
                            <th>Last Modified</th>
                            <th>Default for new Project</th>
                            <th>Assigned Projects</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Prime Contracts</td>
                            <td>No modifications have been made</td>
                            <td>set as default</td>
                            <td>0/1021 projects</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-3 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Prime Contracts</td>
                            <td>No modifications have been made</td>
                            <td>set as default</td>
                            <td>0/1021 projects</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-3 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Prime Contracts</td>
                            <td>No modifications have been made</td>
                            <td>set as default</td>
                            <td>0/1021 projects</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-3 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Fieldset