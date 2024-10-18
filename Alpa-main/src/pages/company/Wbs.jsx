import React from 'react'

const Wbs = () => {
    return (
        <div className='md:px-12 px-6'>
            <h3 className='font-bold text-lg border-b pb-1'>Work Breakdown Structure</h3>
            <div className='my-4 flex justify-between items-center'>
                <p className='font-semibold'>Segments</p>
                <button className='bg-orange-400 text-white px-2.5 py-2 text-sm rounded-full'>Add Segments</button>
            </div>
            <div className='border mb-4 rounded-md lg:overflow-hidden overflow-auto'>
                <table className='wbs_table w-full'>
                    <thead className='bg-gray-100'>
                        <tr>
                            <th align='start'>Segments</th>
                            <th align='start'>Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cost Code</td>
                            <td>612</td>
                        </tr>
                        <tr>
                            <td>Cost Type</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Sub Job</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex justify-between items-center border-b pb-2 mt-2 mb-3'>
                <h5 className='font-semibold'>Budget Code Strtucture</h5>
                <button className='bg-orange-400 text-white px-4 py-1.5 text-sm rounded-full'>Edit</button>
            </div>
            <div className='flex space-x-8'>
                <p className='font-semibold'>Order:</p>
                <p>Sub job</p>
                <p>Cost Code</p>
                <p>Cost Type</p>
            </div>
        </div>
    )
}

export default Wbs