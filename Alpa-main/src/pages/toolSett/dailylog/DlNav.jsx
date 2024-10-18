import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { IoMdArrowDropdown } from 'react-icons/io'

const DlNav = () => {

    const toggleDropDown = () => {
        const dlnav = document.querySelector('.dlnav')
        dlnav.classList.toggle('hidden')
        dlnav.classList.toggle('flex')
    }

    return (
        <div className='md:px-12 px-6'>
            <div className='flex space-x-6 border-b items-center pb-0 relative'>
                <h3 onClick={toggleDropDown} className='font-semibold text-lg pb-1 flex items-center'>
                    Dailylog <IoMdArrowDropdown className='ml-1 md:hidden block' />
                </h3>
                <div className='md:flex hidden md:space-x-5 md:ml-5 ml-0 md:flex-row flex-col md:space-y-0 space-y-4 md:bg-transparent bg-white md:p-0 p-4 md:static absolute -left-7 top-[32px] md:shadow-none shadow-md md:rounded-none rounded-md dlnav'>
                    <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/tool/dailylog/types'>Types</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/tool/dailylog/fieldset'>Fieldsets</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/tool/dailylog/custom-fields'>Custom Fields</NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default DlNav