import React from 'react'

const Forecasting = () => {
    return (
        <div>
            <div className='flex justify-between my-4'>
                <h5 className='font-semibold'>Forecast Views</h5>
                <button className='bg-orange-400 text-white px-2.5 py-2 rounded-full text-sm'>Setup New Forecast View</button>
            </div>
            <div className='border rounded-md lg:overflow-hidden overflow-auto'>
                <table className='w-full project_default_table'>
                    <thead className='bg-gray-100 border-b'>
                        <tr>
                            <th>View</th>
                            <th>Description</th>
                            <th>Projects</th>
                            <th>Created By</th>
                            <th>Date Created</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Procore Standard Forecast</td>
                            <td>Forecast view</td>
                            <td>2 projects selected
                                Bedford Park Historical Building</td>
                            <td>Gelormini, Teresa (Alpa Construction Inc)</td>
                            <td>10/21/24 at 7:21pm</td>
                            <td>
                                <button className='bg-[#1C2852] text-white px-2.5 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Use for monthly financial update</td>
                            <td>ERP job cost detail budget</td>
                            <td>0 projects selected</td>
                            <td></td>
                            <td>10/21/24 at 7:21pm</td>
                            <td>
                                <button className='bg-[#1C2852] text-white px-2.5 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Use for monthly financial update</td>
                            <td>ERP job cost detail budget</td>
                            <td>0 projects selected</td>
                            <td>Alpa Construction</td>
                            <td>10/21/24 at 7:21pm</td>
                            <td>
                                <button className='bg-[#1C2852] text-white px-2.5 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Forecasting