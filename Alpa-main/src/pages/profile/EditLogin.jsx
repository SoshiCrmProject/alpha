import React from 'react'

const EditLogin = () => {
    return (
        <div className='bg-white md:px-14 px-7 py-5'>
            <div className='flex justify-between'>
                <h4 className='font-bold text-lg'>Login</h4>
                <div className='flex space-x-3'>
                    <button className='border border-orange-400 text-orange-400 px-3 py-1 rounded-full'>Cancel</button>
                    <button className='bg-orange-400 text-white px-3 py-1 rounded-full'>Update</button>
                </div>
            </div>
            <div className='profileLogin'>
                <h6 className='my-5 border-b font-semibold pb-1'>Change Login</h6>
                <div className='flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' placeholder='Enter your email' className='md:w-2/5 w-3/4' />
                </div>
                <div className='flex flex-col mt-3'>
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" id='password' placeholder='Enter your password' className='md:w-2/5 w-3/4' />
                </div>
            </div>
        </div>
    )
}

export default EditLogin