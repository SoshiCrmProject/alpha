import React from 'react'

const AccountInfo = () => {
    return (
        <div>
            <div className='flex justify-between items-center my-4'>
                <h3 className='font-semibold text-gray-700'>Company Information</h3>
                <button className='bg-orange-400 text-white px-2.5 py-2 rounded-full text-sm'>Save Changes</button>
            </div>

            <div className='mt-4 md:mb-10 mb-8 grid grid-cols-12 gap-4 AccInfo'>
                <div className='md:col-span-6 col-span-12'>
                    <label htmlFor="company_type">Company Type</label>
                    <input type="text" id='company_type' />
                </div>
                <div className="md:col-span-6 col-span-12">
                    <label htmlFor="company_name">Company Name</label>
                    <input type="text" id='company_name' />
                </div>
                <div className="md:col-span-6 col-span-12">
                    <label htmlFor="contact_name">Contact Name</label>
                    <input type="text" id='contact_name' />
                </div>
                <div className="col-span-12">
                    <label htmlFor="address1">Address 1</label>
                    <input type="text" id='address1' />
                </div>
                <div className="col-span-12">
                    <label htmlFor="address2">Address 2</label>
                    <input type="text" id='address2' />
                </div>
                <div className='lg:col-span-3 md:col-span-6 col-span-12'>
                    <label htmlFor="city">City</label>
                    <input type="text" id='city' />
                </div>
                <div className='lg:col-span-3 md:col-span-6 col-span-12'>
                    <label htmlFor="postal_code">Postal Code</label>
                    <input type="text" id='postal_code' />
                </div>
                <div className='lg:col-span-3 md:col-span-6 col-span-12'>
                    <label htmlFor="state">State</label>
                    <input type="text" id='state' />
                </div>
                <div className='lg:col-span-3 md:col-span-6 col-span-12'>
                    <label htmlFor="country">Country</label>
                    <input type="text" id='country' />
                </div>
                <div className='md:col-span-4 col-span-12'>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id='phone' />
                </div>
                <div className='md:col-span-4 col-span-12'>
                    <label htmlFor="cell">Cell</label>
                    <input type="text" id='cell' />
                </div>
                <div className='md:col-span-4 col-span-12'>
                    <label htmlFor="fax">Fax</label>
                    <input type="text" id='fax' />
                </div>
            </div>
        </div>
    )
}

export default AccountInfo