import React from 'react'

const Dates = () => {
    return (
        <div className='md:px-12 px-6'>
            <h3 className='font-semibold text-lg border-b pb-1'>Dates</h3>
            <div className='my-5 border rounded-md lg:overflow-hidden overflow-auto'>
                <table className='w-full project_dates_table'>
                    <thead className='bg-gray-100 border-b'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Add to project Dashboard</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td align='left'>1</td>
                            <td>Issued for zoning permit</td>
                            <td><input type="checkbox" /></td>
                            <td><button className='bg-[#1C2852] text-white px-3 py-1 rounded'>Delete</button></td>
                        </tr>
                        <tr>
                            <td align='left'>2</td>
                            <td>Issued for zoning permit</td>
                            <td><input type="checkbox" /></td>
                            <td><button className='bg-[#1C2852] text-white px-3 py-1 rounded'>Delete</button></td>
                        </tr>
                        <tr>
                            <td align='left'>3</td>
                            <td>Issued for zoning permit</td>
                            <td><input type="checkbox" /></td>
                            <td><button className='bg-[#1C2852] text-white px-3 py-1 rounded'>Delete</button></td>
                        </tr>
                        <tr>
                            <td align='left'>4</td>
                            <td>Issued for zoning permit</td>
                            <td><input type="checkbox" /></td>
                            <td><button className='bg-[#1C2852] text-white px-3 py-1 rounded'>Delete</button></td>
                        </tr>
                        <tr>
                            <td align='left'>5</td>
                            <td>Issued for zoning permit</td>
                            <td><input type="checkbox" /></td>
                            <td><button className='bg-[#1C2852] text-white px-3 py-1 rounded'>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dates