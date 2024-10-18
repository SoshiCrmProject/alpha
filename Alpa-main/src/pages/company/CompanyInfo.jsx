import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'

const CompanyInfo = () => {
    return (
        <div className='md:px-12 px-6'>
            <h3 className='font-semibold text-lg border-b pb-1'>Account Information</h3>
            <div className='my-3'>
                <h5 className='font-semibold my-2'>Details</h5>
                <div className='border rounded-md text-sm lg:overflow-hidden overflow-auto'>
                    <table className='w-full'>
                        <tbody>
                            <tr className='bg-gray-100 border-b'>
                                <td className='p-2'>Creation Date</td>
                                <td className='p-2'>03/17/2022</td>
                                <td className='p-2'>Project Cap</td>
                                <td className='p-2'>10 of 51 in use</td>
                            </tr>
                            <tr>
                                <td className='p-2'>ERP integrations</td>
                                <td className='p-2'>Sage 300 CRE</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='my-3'>
                <h5 className='font-semibold my-2 mt-4'>Tools</h5>
                <div className='border rounded-md text-sm lg:overflow-hidden overflow-auto'>
                    <div className='flex justify-between bg-gray-100 px-3 items-center h-10 border-b font-semibold'>
                        <p>Tools by product category</p>
                        <div className='border-s border-gray-300 px-5 h-full items-center flex'>
                            <p>Contract Type</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex px-3 py-2 items-center border-b'>
                            <FaAngleLeft className='mr-4 ml-2 text-orange-400' /><p>Core Tools</p>
                        </div>
                        <div className='flex px-3 py-2 items-center border-b'>
                            <FaAngleLeft className='mr-4 ml-2 text-orange-400' /><p>Project Management</p>
                        </div>
                        <div className='flex px-3 py-2 items-center border-b'>
                            <FaAngleLeft className='mr-4 ml-2 text-orange-400' /><p>Financial Management</p>
                        </div>
                        <div className='flex px-3 py-2 items-center'>
                            <FaAngleLeft className='mr-4 ml-2 text-orange-400' /><p>Custom</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyInfo