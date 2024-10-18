import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { FiBell, FiEdit3, FiTrash, FiKey } from 'react-icons/fi'

const UserTypes = () => {
    return (
        <div>
            <div className='flex justify-between items-center my-3'>
                <h5 className='font-semibold text-gray-700'>Company User Types</h5>
                <button className='bg-orange-400 text-white px-3 py-1.5 text-sm rounded-full flex items-center'>
                    <FaPlus className='mr-1' /> Add Type
                </button>
            </div>
            <div className='border border-gray-300 rounded-md my-3 text-sm'>
                <div className='bg-gray-100 px-3 py-2 border-b'>Company User Types</div>
                <div>
                    <div className='flex justify-between items-center px-4 py-2.5'>
                        <p>Project Manager</p>
                        <div className='flex items-center space-x-3 text-base'>
                            <button><FiKey /></button>
                            <button><FiBell /></button>
                            <button><FiEdit3 /></button>
                            <button><FiTrash /></button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center px-4 py-2.5'>
                        <p>Supritendent</p>
                        <div className='flex items-center space-x-3 text-base'>
                            <button><FiKey /></button>
                            <button><FiBell /></button>
                            <button><FiEdit3 /></button>
                            <button><FiTrash /></button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center px-4 py-2.5'>
                        <p>Estimator</p>
                        <div className='flex items-center space-x-3 text-base'>
                            <button><FiKey /></button>
                            <button><FiBell /></button>
                            <button><FiEdit3 /></button>
                            <button><FiTrash /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center my-3'>
                <h5 className='font-semibold text-gray-700'>User Types</h5>
                <button className='bg-orange-400 text-white px-3 py-1.5 text-sm rounded-full flex items-center'>
                    <FaPlus className='mr-1' /> Add Type
                </button>
            </div>
            <div className='border border-gray-300 rounded-md my-3 text-sm'>
                <div className='bg-gray-100 px-3 py-2 border-b'>User Types</div>
                <div>
                    <div className='flex justify-between items-center px-4 py-2.5'>
                        <p>Sub Contractor</p>
                        <div className='flex items-center space-x-3 text-base'>
                            <button><FiKey /></button>
                            <button><FiBell /></button>
                            <button><FiEdit3 /></button>
                            <button><FiTrash /></button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center px-4 py-2.5'>
                        <p>Vendor</p>
                        <div className='flex items-center space-x-3 text-base'>
                            <button><FiKey /></button>
                            <button><FiBell /></button>
                            <button><FiEdit3 /></button>
                            <button><FiTrash /></button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center px-4 py-2.5'>
                        <p>Owner</p>
                        <div className='flex items-center space-x-3 text-base'>
                            <button><FiKey /></button>
                            <button><FiBell /></button>
                            <button><FiEdit3 /></button>
                            <button><FiTrash /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserTypes