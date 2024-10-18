import React from 'react'

const OpenItems = () => {
    return (
        <div>
            <h5 className='font-semibold my-4'>My Open Items</h5>
            <div className='border rounded-md overflow-auto mt-2'>
                <table className='w-full home_project_table'>
                    <thead className='bg-gray-100 border-b'>
                        <tr>
                            <th>Project Name</th>
                            <th>Item Type</th>
                            <th>Details</th>
                            <th>Status</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>MNA_AE RFP-Response</td>
                            <td>Design Services</td>
                            <td>8.17 - MM/SR; design/build</td>
                            <td><span className='bg-green-100 text-green-600 px-3 py-1 rounded-full'>Active</span></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>MNA_AE RFP-Response</td>
                            <td>Design Services</td>
                            <td>8.17 - MM/SR; design/build</td>
                            <td><span className='bg-green-100 text-green-600 px-3 py-1 rounded-full'>Active</span></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>MNA_AE RFP-Response</td>
                            <td>Design Services</td>
                            <td>8.17 - MM/SR; design/build</td>
                            <td><span className='bg-green-100 text-green-600 px-3 py-1 rounded-full'>Active</span></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>MNA_AE RFP-Response</td>
                            <td>Design Services</td>
                            <td>8.17 - MM/SR; design/build</td>
                            <td><span className='bg-green-100 text-green-600 px-3 py-1 rounded-full'>Active</span></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OpenItems