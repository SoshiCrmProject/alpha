import React from 'react'

const ExpenseAllocation = () => {
    return (
        <div className='md:px-12 px-6'>
            <h3 className='font-semibold text-lg border-b pb-1'>Expense Allocation</h3>
            <div className='my-5'>
                <h5 className='font-semibold mb-2'>Details</h5>
                <div className='border rounded-md text-sm lg:overflow-hidden overflow-auto'>
                    <table className='expense_allocation_table'>
                        <thead className='bg-gray-100 border-b'>
                            <tr>
                                <th>Project</th>
                                <th>Estimated Contract Value</th>
                                <th>Value</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Procore Contract Billing Period Original Value</th>
                                <th>Procore Contract Billing Period Remaining Value</th>
                                <th>Procore Contract Billing Period Start Date</th>
                                <th>Procore Contract Billing Period End Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='h-32'>
                                <td colSpan={9} className='text-center'>No Expense Allocation</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ExpenseAllocation