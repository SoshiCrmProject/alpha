import React from 'react'
import { Link } from 'react-router-dom'

const ServiceAccounts = () => {
    return (
        <div className='md:px-12 px-6'>
            <h3 className='font-semibold text-lg border-b pb-1'>Service Accounts</h3>
            <div className='my-5 border rounded-md lg:overflow-hidden overflow-auto'>
                <table className='service_accounts_table w-full'>
                    <thead className='bg-gray-100 border-b'>
                        <tr>
                            <th>Name</th>
                            <th>App Name</th>
                            <th>Action Buttons</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm'>
                        <tr>
                            <td>sage-microservice-alpa-construction-inc</td>
                            <td>procore-support-direct-cost-removal-for-three-projects-alpa-construction-inc</td>
                            <td className='flex space-x-2 justify-center'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-3 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Sage 300 CRE Connector</td>
                            <td>Custom</td>
                            <td className='flex space-x-2 justify-center'>
                                <button className='border border-[#1C2852] text-[#1C2852] px-3 py-1 rounded-md'>Edit</button>
                                <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className='text-sm mt-3'>Please refer to the following <Link className='text-orange-500'>support article</Link>. You will need this Procore-Company-Id 2443 to complete your configuration. Need help? <Link className='text-orange-500'>Contact us</Link>.</p>
        </div>
    )
}

export default ServiceAccounts