import React from 'react'

const Migration = () => {
    return (
        <div>
            <div className='flex justify-between items-center my-4'>
                <h5 className='font-semibold'>Migrate Budget Modifications to Budget Changes</h5>
                <button className='bg-orange-400 text-white px-2.5 py-2 rounded-full text-sm'>Schedule Migration</button>
            </div>
            <div className='my-2 text-sm migrate'>
                <p>Budget Changes are a new feature that will be replacing the current budget modifications. Budget Changes are a more flexible and controlled way to make changes to project budgets. Learn more in our support documentation.</p>
                <p>After migration is complete, every budget modification on all your company’s projects will be mapped to a new budget change. You will be able to edit and delete any budget changes created from existing modifications, and they will be synced with your ERP integration if applicable.</p>
                <p>Budget modifications will be replaced by budget changes in the budget, budget views, change events, custom reporting, and analytics. After clicking Schedule Migration below, the migration will be scheduled for the next day at 3AM Eastern Time. No new budget modifications can be created, edited, or deleted once the migration starts.</p>
                <p>If your company has custom integrations, you will need to update to the new budget changes api after migration. If Change Events is enabled, your company will also be permanently opted into the new Change Events experience.</p>
                <p><b>This action cannot be undone.</b> Reach out to your Procore point of contact if you have any questions before you begin the migration.</p>
            </div>
            <div className='flex items-center mt-3'>
                <input type="checkbox" className='w-4 h-4' />
                <label className='text-sm ml-2'>I have read the above information and acknowledge the potential impact this may have on my organization.</label>
            </div>
        </div>
    )
}

export default Migration