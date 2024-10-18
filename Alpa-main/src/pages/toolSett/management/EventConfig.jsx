import React from 'react'

const EventConfig = () => {
    return (
        <div>
            <div className='flex justify-between mb-3 mt-5 items-center'>
                <h5 className='font-semibold'>Change Reasons</h5>
                <button className='bg-orange-400 text-white px-2.5 py-1.5 rounded-full text-sm'>Add New</button>
            </div>
            <div className='border rounded-md lg:overflow-hidden overflow-auto'>
                <table className='w-full project_types_table'>
                    <thead className='bg-gray-100 border-b'>
                        <th>Change Reason</th>
                        <th>Available</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Field Coordination</td>
                            <td><input className='w-4 h-4 md:ms-3 ms-1' type="checkbox" /></td>
                            <td align='end'><button className='bg-[#1C2852] text-white px-3 py-1 rounded'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>Contingency</td>
                            <td><input checked className='w-4 h-4 md:ms-3 ms-1' type="checkbox" /></td>
                            <td align='end'><button className='bg-[#1C2852] text-white px-3 py-1 rounded'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>Owner Change</td>
                            <td><input className='w-4 h-4 md:ms-3 ms-1' type="checkbox" /></td>
                            <td align='end'><button className='bg-[#1C2852] text-white px-3 py-1 rounded'>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex justify-between mb-3 mt-5 items-center'>
                <h5 className='font-semibold'>Change Types</h5>
                <button className='bg-orange-400 text-white px-2.5 py-1.5 rounded-full text-sm'>Add New</button>
            </div>
            <div className='border rounded-md lg:overflow-hidden overflow-auto'>
                <table className='w-full project_types_table'>
                    <thead className='bg-gray-100 border-b'>
                        <th>Change Type</th>
                        <th>Abbreviation</th>
                        <th>Available</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Field Coordination</td>
                            <td>A</td>
                            <td><input className='w-4 h-4 md:ms-3 ms-1' type="checkbox" /></td>
                            <td align='end'><button className='bg-[#1C2852] text-white px-3 py-1 rounded'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>Contingency</td>
                            <td>C</td>
                            <td><input checked className='w-4 h-4 md:ms-3 ms-1' type="checkbox" /></td>
                            <td align='end'><button className='bg-[#1C2852] text-white px-3 py-1 rounded'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>Owner Change</td>
                            <td>O</td>
                            <td><input className='w-4 h-4 md:ms-3 ms-1' type="checkbox" /></td>
                            <td align='end'><button className='bg-[#1C2852] text-white px-3 py-1 rounded'>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EventConfig