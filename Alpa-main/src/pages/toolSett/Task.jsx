import React from 'react'

const Task = () => {
    return (
        <div className='md:px-12 px-6'>
            <h3 className='font-bold text-lg border-b pb-1'>Tasks</h3>
            <div className='flex justify-between items-center my-4'>
                <h5 className='font-semibold'>Task Categories</h5>
                <button className='bg-orange-400 text-white px-4 py-1.5 rounded-full text-sm'>Create</button>
            </div>
            <div className='border rounded-md lg:overflow-hidden overflow-auto'>
                <table className='w-full project_default_table'>
                    <thead className='bg-gray-100 border-b'>
                        <th>Name</th>
                        <th style={{ textAlign: 'center' }}>Active</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Attic Stock</td>
                            <td align='center'><input checked className='w-4 h-4' type="checkbox" /></td>
                            <td align='end'><button disabled className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>Document</td>
                            <td align='center'><input className='w-4 h-4' type="checkbox" /></td>
                            <td align='end'><button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>Production</td>
                            <td align='center'><input checked className='w-4 h-4' type="checkbox" /></td>
                            <td align='end'><button disabled className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>Other</td>
                            <td align='center'><input className='w-4 h-4' type="checkbox" /></td>
                            <td align='end'><button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Task