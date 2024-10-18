import React from 'react'

const Statuses = () => {
    return (
        <div>
            <div className='flex justify-between items-center my-4'>
                <h3 className='font-semibold'>Custom Statuses</h3>
                <button className='bg-orange-400 text-white px-3 py-1.5 rounded-full text-sm'>Add Status</button>
            </div>
            <div className='border rounded-md lg:overflow-hidden overflow-auto'>
                <table className='w-full project_default_table'>
                    <thead className='bg-gray-100 border-b'>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Status Type</th>
                        <th>Global status Mapping</th>
                        <th>Display US</th>
                    </thead>
                    <tbody className='text-center h-52'>
                        <tr>
                            <td colSpan={5}>
                                <h3 className='text-lg font-semibold mb-0'>There Are No Items to Display Right Now</h3>
                                <br />
                                <p className='font-semibold text-gray-500'>Once your team creates these items, you can access them here.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Statuses