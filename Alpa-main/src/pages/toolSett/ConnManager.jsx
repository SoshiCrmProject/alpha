import React from 'react'
import Accordion from '../../components/ui/Accordion'

const ConnManager = () => {
    return (
        <div className='md:px-12 px-6 -mt-5'>
            <div className='flex justify-between items-center my-4 border-b pb-2'>
                <h3 className='font-semibold text-lg'>Connection Manager</h3>
                <button className='bg-orange-400 text-white px-3 py-1.5 rounded-full'>Save</button>
            </div>
            <p className='text-sm'>This feature lets you connect two Procore projects in different accounts. You can manage individual project connections from each project's Connection Manager tool.</p>
            <div className='my-3'>
                <h5 className='font-semibold mb-2'>Connection Requests</h5>
                <p className='mb-2'>Collaborators with access to your Drawings tool may connect your project with the Drawings tool in a project they manage. They'll automatically receive a copy of any drawings you publish.</p>
                <div className='flex items-center space-x-3 mt-2'>
                    <input className='h-4 w-4' type="checkbox" id='allow' />
                    <label htmlFor='allow'>Allow user with existing access to the drawings tool to connect  their project without Admin approval.</label>
                </div>
            </div>
            <div>
                <h5 className='font-semibold mb-1'>Connection Manager Emails</h5>
                <p>Users with Admin permissions on a project's Connection Manager tool will be notified of new connections, disconnections, and connection requests (if approval required). You can customize email notifications settings in each project's Connection Manager settings.</p>
            </div>
            <div className='my-4'>
                <h3 className='font-semibold text-lg'>Connected Projects</h3>
                <div className='my-3 shadow-md'>
                    <Accordion title='Upstream Connections'>
                        Nothing to Show
                    </Accordion>
                </div>
                <div className='mb-3 mt-6 shadow-md'>
                    <Accordion title='Downstream Connections'>
                        Nothing to Show
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default ConnManager