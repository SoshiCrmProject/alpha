import React from 'react'

const ContractSettings = () => {
    return (
        <div>
            <div className='flex items-center text-sm mb-3 mt-7'>
                <div>
                    <p>Restrict Edits to the Schedule of Values and Contract Company for the Following Objects Unless They Have a Status of Draft or Out for Bid:</p>
                    <p>Please note that SOV edits will not be restricted if always editable schedule of values is turned on for a project.</p>
                </div>
                <button className='bg-orange-400 text-white px-3 py-1.5 rounded-full md:ml-14 ml-7'>Save</button>
            </div>
            <div className='mt-6'>
                <div className='flex items-center space-x-3 my-3'>
                    <input className='w-4 h-4' type="checkbox" />
                    <label htmlFor="">Prime Contracts</label>
                </div>
                <div className='flex items-center space-x-3 my-3'>
                    <input className='w-4 h-4' type="checkbox" />
                    <label htmlFor="">Purchase Orders</label>
                </div>
                <div className='flex items-center space-x-3 my-3'>
                    <input className='w-4 h-4' type="checkbox" />
                    <label htmlFor="">Subcontracts</label>
                </div>
            </div>
        </div>
    )
}

export default ContractSettings