import React from 'react'
import Select from '../../components/ui/Select'
import LongBarChart from '../../components/charts/LongBarChart'
import SimpleDonut from '../../components/charts/SimpleDonut'
import AreaChart from '../../components/charts/AreaChart'

const ProjectMgm = () => {

    const filterOptions = ['Project Manager', 'Accountant', 'Supritendent', 'Project Executive', 'Regional Director', 'Project Enginneer']

    return (
        <div className='md:px-10 px-6'>

            <div className='my-3 flex justify-between items-center text-sm border-b pb-1'>
                <h5 className='text-lg font-semibold'>Project Management Overview</h5>
                <Select
                    options={filterOptions}
                    label='Add Filters'
                    onSelect={(i) => { console.log(i) }}
                />
            </div>

            <div className='my-4 grid xl:grid-cols-2 grid-cols-1 gap-4'>
                <div className='p-3 border rounded-xl'>
                    <h6 className='font-semibold text-base mb-1'>Open Submittals by Project</h6>
                    <LongBarChart colors={['#FF4560', '#00E396', '#FEB019', '#775DD0', '#546E7A', '#26A69A', '#D4526E', '#8D5B4C', '#F86624']} />
                </div>
                <div className='p-3 border rounded-xl'>
                    <h6 className='font-semibold text-base mb-1'>Open Submittals by Submittal Manager</h6>
                    <LongBarChart colors={['#962DFF']} />
                </div>
                <div className='p-3 border rounded-xl'>
                    <h6 className='font-semibold text-base mb-1'>Schedule Tasks by Finish Date</h6>
                    <AreaChart />
                </div>
                <div className='p-3 border rounded-xl'>
                    <h6 className='font-semibold text-base mb-1'>RFIs by Status</h6>
                    <SimpleDonut />
                </div>
                <div className='p-3 border rounded-xl'>
                    <h6 className='font-semibold text-base mb-1'>Count of RFIs by Due Date</h6>
                    <AreaChart />
                </div>
                <div className='p-3 border rounded-xl'>
                    <h6 className='font-semibold text-base mb-1'>Count of RFIs Created by Project</h6>
                    <LongBarChart colors={['#962DFF']} />
                </div>
            </div>

        </div>
    )
}

export default ProjectMgm