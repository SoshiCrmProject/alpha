import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ConfViews = () => {
    return (
        <div>
            <div className='flex justify-end mt-5 mb-3'>
                <button className='bg-orange-400 text-white px-2.5 py-1.5 rounded-full text-sm'>Create View</button>
            </div>
            <div className='border rounded-md lg:overflow-hidden overflow-auto'>
                <table className='w-full project_dates_table'>
                    <thead className='bg-gray-100 border-b'>
                        <tr>
                            <th>Field Type</th>
                            <th>Name</th>
                            <th>Applied to</th>
                            <th>Last Modified</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Link className='text-blue-500' to="/">Classic Summary</Link></td>
                            <td>This view shows columns related to individual change event line item details (line description, vendor, contract, Unit of Measure)</td>
                            <td>All projects</td>
                            <td>12/21/23 at 7:21pm</td>
                            <td>
                                <select className='outline-none border border-gray-300 p-2 rounded-md'>
                                    <option value="1">Published</option>
                                    <option value="2">Hidden</option>
                                </select>
                            </td>
                            <td>
                                <button className='bg-gray-200 p-2 rounded-md'><BsThreeDotsVertical /></button>
                            </td>
                        </tr>
                        <tr>
                            <td><Link className='text-blue-500' to="/">Classic Summary</Link></td>
                            <td>This view shows columns related to individual change event line item details (line description, vendor, contract, Unit of Measure)</td>
                            <td>All projects</td>
                            <td>12/21/23 at 7:21pm</td>
                            <td>
                                <select className='outline-none border border-gray-300 p-2 rounded-md'>
                                    <option value="1">Published</option>
                                    <option value="2">Hidden</option>
                                </select>
                            </td>
                            <td>
                                <button className='bg-gray-200 p-2 rounded-md'><BsThreeDotsVertical /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ConfViews