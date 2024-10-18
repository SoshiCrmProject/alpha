import React from 'react'
import ToggleBtn from '../../components/ui/ToggleBtn'

const Trades = () => {
    return (
        <div className='md:px-12 px-6'>
            <div className='flex justify-between border-b pb-2 items-center'>
                <h3 className='font-bold text-lg'>Trades</h3>
                <button className='bg-orange-400 text-white px-2.5 py-1.5 rounded-full'>Create New</button>
            </div>
            <div className='my-5 border rounded-md md:text-base text-sm'>
                <div className='bg-gray-100 md:px-6 px-4 py-1.5 border-b font-semibold'>Names</div>
                <div className='flex justify-between items-center md:px-6 px-4 py-2 border-b'>
                    <p>ABATEMENT</p>
                    <div className='flex items-center space-x-6'>
                        <div className='flex space-x-3'>
                            <p>Active</p>
                            <ToggleBtn />
                        </div>
                        <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                    </div>
                </div>
                <div className='flex justify-between items-center md:px-6 px-4 py-2 border-b'>
                    <p>ACCESS CONTROL</p>
                    <div className='flex items-center space-x-6'>
                        <div className='flex space-x-3'>
                            <p>Active</p>
                            <ToggleBtn />
                        </div>
                        <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                    </div>
                </div>
                <div className='flex justify-between items-center md:px-6 px-4 py-2 border-b'>
                    <p>ACOUSTICAL PANEL CEILINGS</p>
                    <div className='flex items-center space-x-6'>
                        <div className='flex space-x-3'>
                            <p>Active</p>
                            <ToggleBtn />
                        </div>
                        <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                    </div>
                </div>
                <div className='flex justify-between items-center md:px-6 px-4 py-2 border-b'>
                    <p>ALUM FRAMED ENTRANCES AND STOREFRONTS</p>
                    <div className='flex items-center space-x-6'>
                        <div className='flex space-x-3'>
                            <p>Active</p>
                            <ToggleBtn />
                        </div>
                        <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                    </div>
                </div>
                <div className='flex justify-between items-center md:px-6 px-4 py-2 border-b'>
                    <p>ALUM FRAMED PSYCHIATRIC WINDOWS</p>
                    <div className='flex items-center space-x-6'>
                        <div className='flex space-x-3'>
                            <p>Active</p>
                            <ToggleBtn />
                        </div>
                        <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                    </div>
                </div>
                <div className='flex justify-between items-center md:px-6 px-4 py-2 border-b'>
                    <p>ARCHITECT</p>
                    <div className='flex items-center space-x-6'>
                        <div className='flex space-x-3'>
                            <p>Active</p>
                            <ToggleBtn />
                        </div>
                        <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                    </div>
                </div>
                <div className='flex justify-between items-center md:px-6 px-4 py-2 border-b'>
                    <p>ARCHITECTURAL</p>
                    <div className='flex items-center space-x-6'>
                        <div className='flex space-x-3'>
                            <p>Active</p>
                            <ToggleBtn />
                        </div>
                        <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                    </div>
                </div>
                <div className='flex justify-between items-center md:px-6 px-4 py-2 border-b'>
                    <p>ARCHITECTURAL WOODWORK</p>
                    <div className='flex items-center space-x-6'>
                        <div className='flex space-x-3'>
                            <p>Active</p>
                            <ToggleBtn />
                        </div>
                        <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                    </div>
                </div>
                <div className='flex justify-between items-center md:px-6 px-4 py-2 border-b'>
                    <p>CARPETING</p>
                    <div className='flex items-center space-x-6'>
                        <div className='flex space-x-3'>
                            <p>Active</p>
                            <ToggleBtn />
                        </div>
                        <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                    </div>
                </div>
                <div className='flex justify-between items-center md:px-6 px-4 py-2'>
                    <p>COMMISSIONING</p>
                    <div className='flex items-center space-x-6'>
                        <div className='flex space-x-3'>
                            <p>Active</p>
                            <ToggleBtn />
                        </div>
                        <button className='bg-[#1C2852] text-white px-3 py-1 rounded-md'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trades