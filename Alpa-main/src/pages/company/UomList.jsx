import React from 'react'

const UomList = () => {
    return (
        <div className='md:px-12 px-6'>
            <div className='flex justify-between border-b pb-2 items-center'>
                <h3 className='font-semibold text-lg'>Unit of Measure Master List</h3>
                <div className='flex items-center space-x-3'>
                    <button className='border border-orange-400 text-orange-400 px-2.5 py-1 rounded-full'>Cancel</button>
                    <button className='bg-orange-400 text-white px-4 py-1.5 rounded-full'>Save</button>
                </div>
            </div>
            <div className='flex justify-end mt-4 mb-2'>
                <button className='bg-orange-400 text-white px-4 py-1.5 rounded-full'>Add Measure of Unit List</button>
            </div>
            <div className='my-5 border rounded-md lg:overflow-hidden overflow-auto'>
                <table className='w-full uomListTable'>
                    <thead className='bg-gray-100 border-b'>
                        <tr>
                            <th>Display Name</th>
                            <th>Description</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>days</td>
                            <td>years</td>
                            <td>time</td>
                        </tr>
                        <tr>
                            <td>hours</td>
                            <td>each</td>
                            <td>time</td>
                        </tr>
                        <tr>
                            <td>months</td>
                            <td>Lump Sum</td>
                            <td>time</td>
                        </tr>
                        <tr>
                            <td>weeks</td>
                            <td>Linear feet</td>
                            <td>Time</td>
                        </tr>
                        <tr>
                            <td>years</td>
                            <td>meters</td>
                            <td>time</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UomList