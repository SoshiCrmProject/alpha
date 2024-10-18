import React from 'react'
import DetailProjectStats from '../../../components/charts/DetailProjectStats'

const ExecutiveDashboard = () => {
    return (
        <div>
            <div className='flex justify-between my-4'>
                <h5 className='font-semibold'>Projects</h5>
                <div>
                    <label htmlFor="filter">Group By:</label>
                    <select id="filter" className='outline-none border border-gray-300 py-1.5 px-2 rounded-full ml-2'>
                        <option value="">none</option>
                    </select>
                </div>
            </div>
            <div className='mb-5 w-full h-full overflow-hidden'>
                <DetailProjectStats />
            </div>
        </div>
    )
}

export default ExecutiveDashboard