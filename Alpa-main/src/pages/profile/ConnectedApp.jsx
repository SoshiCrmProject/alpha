import React from 'react'

const ConnectedApp = () => {
    return (
        <div className='bg-white md:px-14 px-6 py-5'>
            <div className='flex justify-between'>
                <h4 className='font-bold text-lg'>My Connected App</h4>
                <div className='flex space-x-3'>
                    <button className='border border-orange-400 text-orange-400 px-3 py-1 rounded-full'>Cancel</button>
                    <button className='bg-orange-400 text-white px-3 py-1 rounded-full'>Update</button>
                </div>
            </div>
            <div>
                <h6 className='my-5 border-b font-semibold pb-1'>Connected Apps</h6>
                <table className='w-full border'>
                    <thead className='bg-gray-100 rounded-md'>
                        <th className='p-2 border-e'>Application</th>
                        <th className='p-2 border-e'>Created at</th>
                        <th className='p-2 border-e'></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='p-2 border-e'>procore App</td>
                            <td className='p-2 border-e'>03/17/2022 at 4:30 PM</td>
                            <td className='p-2 border-e text-center'><button className='bg-[#1C2852] text-white px-6 py-2 rounded-md'>Revoke</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ConnectedApp