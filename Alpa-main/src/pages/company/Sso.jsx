import React from 'react'

const Sso = () => {
    return (
        <div className='md:px-12 px-6'>
            <h3 className='font-bold text-lg border-b pb-1'>Single Sign On Configuration</h3>
            <div className='my-5 border rounded-md'>
                <div className='bg-gray-100 px-4 py-1.5 border-b'>
                    <p>Enable Single Sign on</p>
                </div>
                <div className='px-4 py-2 flex space-x-6 items-center border-b'>
                    <p>Single Sign on issuer Url:</p>
                    <input type="text" className='flex-1 px-3 py-1 border border-gray-300 rounded-md outline-none' />
                </div>
                <div className='h-32'></div>
            </div>
        </div>
    )
}

export default Sso