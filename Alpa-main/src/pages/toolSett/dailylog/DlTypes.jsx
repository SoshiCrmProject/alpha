import React from 'react'
import { Link } from 'react-router-dom'
import ToggleBtn from '../../../components/ui/ToggleBtn'

const DlTypes = () => {
    return (
        <div>
            <p className='my-4 text-sm'>Enabled log types can be used within projects. <Link to='/' className='text-orange-400'>Learn more about enabling log types.</Link></p>
            <div className='border rounded-md mt-3 mb-5'>
                <table className='w-full project_default_table'>
                    <thead className='bg-gray-100 border-b'>
                        <th>Name</th>
                        <th className='flex justify-end md:mx-10'>Enabled</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Accident</td>
                            <td className='flex justify-end md:mx-10'><ToggleBtn /></td>
                        </tr>
                        <tr>
                            <td>Phone Calls</td>
                            <td className='flex justify-end md:mx-10'><ToggleBtn state={true} /></td>
                        </tr>
                        <tr>
                            <td>Delays</td>
                            <td className='flex justify-end md:mx-10'><ToggleBtn /></td>
                        </tr>
                        <tr>
                            <td>Deliveries</td>
                            <td className='flex justify-end md:mx-10'><ToggleBtn state={true} /></td>
                        </tr>
                        <tr>
                            <td>Dumpster</td>
                            <td className='flex justify-end md:mx-10'><ToggleBtn /></td>
                        </tr>
                        <tr>
                            <td>Equipment</td>
                            <td className='flex justify-end md:mx-10'><ToggleBtn /></td>
                        </tr>
                        <tr>
                            <td>Inspections</td>
                            <td className='flex justify-end md:mx-10'><ToggleBtn /></td>
                        </tr>
                        <tr>
                            <td>Manpower</td>
                            <td className='flex justify-end md:mx-10'><ToggleBtn /></td>
                        </tr>
                        <tr>
                            <td>Notes</td>
                            <td className='flex justify-end md:mx-10'><ToggleBtn /></td>
                        </tr>
                        <tr>
                            <td>Photos</td>
                            <td className='flex justify-end md:mx-10'><ToggleBtn /></td>
                        </tr>
                        <tr>
                            <td>Plan Revisions</td>
                            <td className='flex justify-end md:mx-10'><ToggleBtn /></td>
                        </tr>
                        <tr>
                            <td>Productivity</td>
                            <td className='flex justify-end md:mx-10'><ToggleBtn /></td>
                        </tr>
                        <tr>
                            <td>Quantities</td>
                            <td className='flex justify-end md:mx-10'><ToggleBtn /></td>
                        </tr>
                        <tr>
                            <td>Safety Violations</td>
                            <td className='flex justify-end md:mx-10'><ToggleBtn /></td>
                        </tr>
                        <tr>
                            <td>Timecards</td>
                            <td className='flex justify-end md:mx-10'><ToggleBtn /></td>
                        </tr>
                        <tr>
                            <td>Visitors</td>
                            <td className='flex justify-end md:mx-10'><ToggleBtn /></td>
                        </tr>
                        <tr>
                            <td>Waste</td>
                            <td className='flex justify-end md:mx-10'><ToggleBtn /></td>
                        </tr>
                        <tr>
                            <td>Observed Weather Conditions</td>
                            <td className='flex justify-end md:mx-10'><ToggleBtn /></td>
                        </tr>
                        <tr>
                            <td>Schedule Work</td>
                            <td className='flex justify-end md:mx-10'><ToggleBtn /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DlTypes