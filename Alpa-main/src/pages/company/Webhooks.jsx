import React from 'react'

const Webhooks = () => {
    return (
        <div className='md:px-12 px-6'>
            <h3 className='font-semibold text-lg border-b pb-1.5'>Webhooks</h3>
            <div className='my-3 flex justify-between'>
                <p>Endpoint Configuration</p>
                <button className='bg-orange-400 text-white px-2.5 py-1.5 rounded-full text-sm'>Save Endpoint</button>
            </div>
            <div className='my-4'>
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="noti_endpoint">Notification Endpoint:</label>
                    <input type="text" className='md:w-[50%] w-full bg-gray-100 px-3 py-1.5 border border-gray-300 rounded-md outline-none' id='noti_endpoint' />
                </div>
                <div className='flex flex-col space-y-2 mt-5'>
                    <label htmlFor="auth_header">Authorization Header:</label>
                    <input type="text" className='md:w-[50%] w-full bg-gray-100 px-3 py-1.5 border border-gray-300 rounded-md outline-none' id='auth_header' />
                </div>
            </div>
        </div>
    )
}

export default Webhooks