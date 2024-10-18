import React from 'react'
import { Link } from 'react-router-dom'
import EditorQuill from '../../components/ui/EditorQuill'

const Bidding = () => {
    return (
        <div className='md:px-12 px-6'>
            <h3 className='font-semibold text-lg border-b pb-1'>Bidding</h3>
            <div className='my-4'>
                <h5 className='font-semibold'>Default Bid Package Settings</h5>
                <p className='text-sm mt-1'>These configuration settings will be applied to the project's admin settings and new bid packages. <Link to='/' className='text-orange-400'>Learn more</Link></p>
            </div>
            <div className='grid md:grid-cols-2 md:gap-y-0 gap-y-3 grid-cols-1 my-4'>
                <div>
                    <h5 className='font-semibold mb-1'>Project Updates</h5>
                    <input type="checkbox" />
                    <label className='ml-2'>Update Configuration for all projects</label>
                </div>
                <h5 className='font-semibold'>Office Location on Bid Communications</h5>
            </div>
            <div className='my-4 py-2'>
                <h5 className='font-semibold'>Project Information</h5>
                <p className='text-sm mb-4 mt-2'>Project information will appear in the bid invitation emails.</p>
                <EditorQuill />
            </div>
            <div className='my-4 py-2'>
                <h5 className='font-semibold'>Bidding Instructions</h5>
                <p className='text-sm mb-4 mt-2'>Instructions pertaining to the bidding process will appear in the bid invitation emails.</p>
                <EditorQuill />
            </div>
            <div className='my-4 py-2'>
                <h5 className='font-semibold'>Bidding Submission Confirmation Message</h5>
                <p className='text-sm mb-4 mt-2'>The bidder will see this message after submitting a bid in planroom.</p>
                <textarea name="" id="" rows='4' className='border border-gray-300 w-full px-4 py-2 rounded-md outline-none' placeholder='Enter message'></textarea>
            </div>
        </div>
    )
}

export default Bidding