import React from 'react'
import Select from '../../components/ui/Select'
import LongBarChart from '../../components/charts/LongBarChart'
import SimpleDonut from '../../components/charts/SimpleDonut'
import AreaChart from '../../components/charts/AreaChart'

const Qso = () => {

    const filterOptions = ['Project Manager', 'Accountant', 'Supritendent', 'Project Executive', 'Regional Director', 'Project Enginneer']

    return (
        <div className='md:px-10 px-6'>

            <div className='my-3 flex justify-between items-center text-sm border-b pb-1'>
                <h5 className='text-lg font-semibold'>Quality and Safety Overview</h5>
                <Select
                    options={filterOptions}
                    label='Add Filters'
                    onSelect={(i) => { console.log(i) }}
                />
            </div>

            <div className='my-3 grid grid-cols-12 gap-x-7 gap-y-4'>
                <div className='col-span-12 p-3 border rounded-xl'>
                    <h6 className='font-semibold text-base mb-1'>Failed Inspection Items by Project</h6>
                    <LongBarChart />
                </div>
                <div className='md:col-span-6 col-span-12 border rounded-xl p-3'>
                    <h6 className='text-base font-semibold mb-3'>Observations by Type</h6>
                    <SimpleDonut height={200} />
                </div>
                <div className='md:col-span-6 col-span-12 border rounded-xl p-3'>
                    <h6 className='text-base font-semibold mb-3'>Total Quality Observations by Assignee's Company</h6>
                    <SimpleDonut height={200} />
                </div>
                <div className='col-span-12 p-3 border rounded-xl'>
                    <h6 className='font-semibold text-base mb-1'>Open Inspections by Project</h6>
                    <LongBarChart />
                </div>
                <div className='col-span-12 p-3 border rounded-xl'>
                    <h6 className='font-semibold text-base mb-1'>Quality Observations Trend Over Time</h6>
                    <AreaChart />
                </div>
            </div>

        </div>
    )
}

export default Qso