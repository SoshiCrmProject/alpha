import React from 'react'

const CcoSettings = () => {
    return (
        <div>
            <div className='flex items-center text-sm mb-3 mt-7'>
                <div>
                    <p>Restrict Edits to the Schedule of Values for the Following Objects Unless They Have a Status of Draft:</p>
                    <p>For two-tier change orders, this will also prevent users from adding or removing potential change orders of any status unless the change order has a status of Draft.</p>
                </div>
                <button className='bg-orange-400 text-white px-3 py-1.5 rounded-full md:ml-14 ml-7'>Save</button>
            </div>
            <div className='mt-6'>
                <div className='flex items-center space-x-3 my-3'>
                    <input className='w-4 h-4' type="checkbox" />
                    <label htmlFor="">Prime Contract Change Orders</label>
                </div>
                <div className='flex items-center space-x-3 my-3'>
                    <input className='w-4 h-4' type="checkbox" />
                    <label htmlFor="">Commitment Change Orders</label>
                </div>
            </div>
        </div>
    )
}

export default CcoSettings