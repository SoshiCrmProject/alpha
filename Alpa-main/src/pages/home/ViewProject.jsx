import React, { useState } from 'react'
import { FaAngleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ProgressBar from '../../components/charts/ProgressBar'
import { BsPerson } from 'react-icons/bs'
import Accordion from '../../components/ui/Accordion'
import SingleProjectStats from '../../components/charts/SingleProjectStats'

const ViewProject = () => {

    const [openItems, setOpenItems] = useState(false);
    const [changedItems, setChangedItems] = useState(false);
    const [todaySchedule, setTodaySchedule] = useState(false);
    const [projectMilestone, setProjectMilestone] = useState(false);

    const [showChart, setShowChart] = useState(false);
    const toggleShowChart = () => {
        setShowChart(!showChart);
    }

    return (
        <div className='px-6'>

            <section className='2xl:mr-[230px]'>
                <div className='flex justify-between items-center border-b pb-1 my-3 whitespace-nowrap'>
                    <h5 className='text-lg font-semibold flex items-center text-ellipsis overflow-hidden'>
                        <FaAngleLeft className='mr-2' />Acadia - Belmont Replacement
                    </h5>
                    <div className='flex items-center space-x-3'>
                        <Link to='/' className='text-orange-400'>Project Report</Link>
                        <button onClick={toggleShowChart} className='flex items-center bg-orange-400 py-1 px-4 rounded-full text-white 2xl:hidden'>
                            <FaAngleDoubleRight className={`mr-2 ${showChart ? 'rotate-0' : 'rotate-180'} transition-all duration-300`} /> Stats
                        </button>
                    </div>
                </div>

                <div className='my-3 grid grid-cols-12 gap-3 text-sm'>
                    <div className='md:col-span-4 col-span-12 border border-gray-300 p-3 rounded-xl'>
                        <div>
                            <div className='flex justify-between items-center mb-1'>
                                <p>RFIs</p>
                                <p>06/06</p>
                            </div>
                            <ProgressBar percentage='100' bg='bg-orange-600' height='h-3' />
                        </div>
                        <div className='mt-3.5'>
                            <div className='flex justify-between items-center mb-1'>
                                <p>Prime Contract COs</p>
                                <p>12/06</p>
                            </div>
                            <ProgressBar bg='bg-yellow-400' percentage='44' height='h-3' />
                        </div>
                        <div className='mt-3.5'>
                            <div className='flex justify-between items-center mb-1'>
                                <p>Schedule</p>
                                <p>09/02</p>
                            </div>
                            <ProgressBar bg='bg-green-500' percentage='84' height='h-3' />
                        </div>
                        <div className='mt-3.5'>
                            <div className='flex justify-between items-center mb-1'>
                                <p>Punch List</p>
                                <p>02/01</p>
                            </div>
                            <ProgressBar bg='bg-yellow-400' percentage='34' height='h-3' />
                        </div>
                        <div className='flex mt-7 items-center justify-end space-x-4'>
                            <div className='flex items-center'>
                                <div className='h-3.5 w-3.5 rounded-full bg-red-500 mr-1.5'></div>
                                <p>Overdue</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='h-3.5 w-3.5 rounded-full bg-yellow-400 mr-1.5'></div>
                                <p>Next 7 days</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='h-3.5 w-3.5 rounded-full bg-green-500 mr-1.5'></div>
                                <p>7 days</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-8 col-span-12 border border-gray-300 p-3 rounded-xl whitespace-nowrap overflow-x-auto'>
                        <p className='font-semibold'>Project Team</p>
                        <div className='flex items-center mt-7 space-x-3'>
                            <div className='w-10 h-10 rounded-full bg-orange-400 flex justify-center items-center'>
                                <BsPerson className='text-3xl' />
                            </div>
                            <p>Prime Contractor</p>
                            <p>John Stewart</p>
                            <p>office123@gmail.com</p>
                            <address>4200 Main Street philadelphia</address>
                        </div>
                        <div className='flex items-center mt-5 space-x-3'>
                            <div className='w-10 h-10 rounded-full bg-green-400 flex justify-center items-center'>
                                <BsPerson className='text-3xl' />
                            </div>
                            <p>Client</p>
                            <p>John Stewart</p>
                            <p>office123@gmail.com</p>
                            <address>4200 Main Street philadelphia</address>
                        </div>
                        <div className='flex items-center mt-5 space-x-3'>
                            <div className='w-10 h-10 rounded-full bg-gray-400 flex justify-center items-center'>
                                <BsPerson className='text-3xl' />
                            </div>
                            <p>Supplier</p>
                            <p>John Stewart</p>
                            <p>office123@gmail.com</p>
                            <address>4200 Main Street philadelphia</address>
                        </div>
                    </div>
                </div>

                <div className='my-3 border border-gray-300 p-3 rounded-xl'>
                    <div onClick={() => setOpenItems(!openItems)} className={`${!openItems ? 'border' : ''} rounded-md`}>
                        <Accordion title='My Open Items' type='spacer' arrowSize='text-xl'>
                            <table className='w-full mt-2 mb-5 project_desc_table'>
                                <thead className='bg-gray-100 rounded-md'>
                                    <tr>
                                        <th></th>
                                        <th>Item Type</th>
                                        <th>Details</th>
                                        <th>Status</th>
                                        <th>Due Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>Meeting Item</td>
                                        <td>Precon / Estimating Internal Kick-Off Meeting - Self-Perform Pricing</td>
                                        <td className='text-blue-500'>Approved</td>
                                        <td>04/10/23</td>
                                    </tr>
                                    <tr>
                                        <td>2.</td>
                                        <td>Meeting Item</td>
                                        <td>Precon / Estimating Internal Kick-Off Meeting - Self-Perform Pricing</td>
                                        <td className='text-blue-500'>Approved</td>
                                        <td>04/10/23</td>
                                    </tr>
                                    <tr>
                                        <td>3.</td>
                                        <td>Meeting Item</td>
                                        <td>Precon / Estimating Internal Kick-Off Meeting - Self-Perform Pricing</td>
                                        <td className='text-blue-500'>Approved</td>
                                        <td>04/10/23</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Accordion>
                    </div>
                    <div onClick={() => setChangedItems(!changedItems)} className={`${!changedItems ? 'border' : ''} rounded-md my-3`}>
                        <Accordion title='Recently Changed Items' type='spacer' arrowSize='text-xl'>
                            <table className='w-full mt-2 mb-5 project_desc_table'>
                                <thead className='bg-gray-100 rounded-md'>
                                    <tr>
                                        <th></th>
                                        <th>Item Type</th>
                                        <th>Details</th>
                                        <th>Status</th>
                                        <th>Due Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>Meeting Item</td>
                                        <td>Precon / Estimating Internal Kick-Off Meeting - Self-Perform Pricing</td>
                                        <td className='text-blue-500'>Approved</td>
                                        <td>04/10/23</td>
                                    </tr>
                                    <tr>
                                        <td>2.</td>
                                        <td>Meeting Item</td>
                                        <td>Precon / Estimating Internal Kick-Off Meeting - Self-Perform Pricing</td>
                                        <td className='text-blue-500'>Approved</td>
                                        <td>04/10/23</td>
                                    </tr>
                                    <tr>
                                        <td>3.</td>
                                        <td>Meeting Item</td>
                                        <td>Precon / Estimating Internal Kick-Off Meeting - Self-Perform Pricing</td>
                                        <td className='text-blue-500'>Approved</td>
                                        <td>04/10/23</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Accordion>
                    </div>
                    <div onClick={() => { setTodaySchedule(!todaySchedule) }} className={`${!todaySchedule ? 'border' : ''} rounded-md my-3`}>
                        <Accordion title="Today's Schedule" arrowSize='text-xl' type='spacer'>
                            Some content here
                        </Accordion>
                    </div>
                    <div onClick={() => { setProjectMilestone(!projectMilestone) }} className={`${!projectMilestone ? 'border' : ''} rounded-md my-3`}>
                        <Accordion title='Project Milestones' type='spacer' arrowSize='text-xl'>
                            Some Content Here
                        </Accordion>
                    </div>
                </div>
            </section>

            <div className={`w-[230px] 2xl:absolute 2xl:top-0 2xl:right-0 h-full bg-white border-l 2xl:mt-[75px] ${showChart ? 'absolute top-0 right-0 z-40' : 'fixed -right-64'} transition-all duration-300`}>
                <SingleProjectStats />
            </div>

            <div onClick={toggleShowChart} className={`overlay bg-black opacity-50 fixed top-0 left-0 w-full h-full z-30 transition-all duration-300 ${showChart ? 'block' : 'hidden'}`}></div>

        </div>
    )
}

export default ViewProject