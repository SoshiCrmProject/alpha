import React from 'react'

const MeetTemp = () => {
    return (
        <div>
            <div className='mb-4 mt-7 border rounded-md lg:overflow-hidden overflow-auto'>
                <table className='w-full project_default_table'>
                    <thead className='bg-gray-100 border-b'>
                        <th>Meeting Name</th>
                        <th>Overview</th>
                        <th>Date Created</th>
                        <th>Created By</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Subcontractor Preconstruction Meeting</td>
                            <td>Contact subcontractors prior to meeting and request that they come to the meeting after having completed a thorough review of the plans and specs for their scope of work… prepared to discuss any areas of concern. Request subcontractor PM attend to support their foremans.</td>
                            <td>01/29/18</td>
                            <td>Potacki, Amanda (Alpa Construction Inc)</td>
                            <td className='flex space-x-2'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-3 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-2 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Subcontractor Preconstruction Meeting</td>
                            <td>Contact subcontractors prior to meeting and request that they come to the meeting after having completed a thorough review of the plans and specs for their scope of work… prepared to discuss any areas of concern. Request subcontractor PM attend to support their foremans.</td>
                            <td>01/29/18</td>
                            <td>Potacki, Amanda (Alpa Construction Inc)</td>
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

export default MeetTemp