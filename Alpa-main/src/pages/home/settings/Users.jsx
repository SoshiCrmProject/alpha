import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { FiBell, FiEdit3, FiTrash, FiKey } from 'react-icons/fi'

const Users = () => {
    return (
        <div>
            <div className='flex justify-between items-center my-3'>
                <h5 className='font-semibold'>Users</h5>
                <button className='bg-orange-400 text-white px-3 py-1.5 rounded-full text-sm flex items-center'><FaPlus className='mr-1' />Add User</button>
            </div>
            <div className='border border-gray-300 rounded-md overflow-auto'>
                <table className='w-full home_page_table'>
                    <thead className='bg-gray-100 border-b'>
                        <tr>
                            <th>Active</th>
                            <th>User Type</th>
                            <th>User Name</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>ITB User</th>
                            <th>PM User</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><div className='w-4 h-4 bg-green-500 rounded-full'></div></td>
                            <td>Project Manager</td>
                            <td>Basmar Ahmed</td>
                            <td>Bill</td>
                            <td>lOyKv@example.com</td>
                            <td>✔</td>
                            <td>✔</td>
                            <td>
                                <div className='flex items-center space-x-3 text-base'>
                                    <button><FiKey /></button>
                                    <button><FiBell /></button>
                                    <button><FiEdit3 /></button>
                                    <button><FiTrash /></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><div className='w-4 h-4 bg-green-500 rounded-full'></div></td>
                            <td>Project Manager</td>
                            <td>Basmar Ahmed</td>
                            <td>Bill</td>
                            <td>lOyKv@example.com</td>
                            <td>✔</td>
                            <td>✔</td>
                            <td>
                                <div className='flex items-center space-x-3 text-base'>
                                    <button><FiKey /></button>
                                    <button><FiBell /></button>
                                    <button><FiEdit3 /></button>
                                    <button><FiTrash /></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><div className='w-4 h-4 bg-green-500 rounded-full'></div></td>
                            <td>Project Manager</td>
                            <td>Basmar Ahmed</td>
                            <td>Bill</td>
                            <td>lOyKv@example.com</td>
                            <td>✔</td>
                            <td>✔</td>
                            <td>
                                <div className='flex items-center space-x-3 text-base'>
                                    <button><FiKey /></button>
                                    <button><FiBell /></button>
                                    <button><FiEdit3 /></button>
                                    <button><FiTrash /></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users