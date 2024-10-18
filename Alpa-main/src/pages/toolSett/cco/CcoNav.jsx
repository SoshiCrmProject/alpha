import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { IoMdArrowDropdown } from 'react-icons/io'

const CcoNav = () => {

    const toggleDropDown = () => {
        const CcoNav = document.querySelector('.CcoNav')
        CcoNav.classList.toggle('hidden')
        CcoNav.classList.toggle('flex')
    }

    return (
        <div className='md:px-12 px-6'>
            <div className='flex border-b items-center pb-0 relative'>
                <h3 onClick={toggleDropDown} className='font-semibold text-lg pb-1 flex items-center'>
                    Contracts & Change Orders <IoMdArrowDropdown className='ml-2 lg:hidden block' />
                </h3>
                <div className='lg:flex hidden lg:space-x-5 lg:ml-5 ml-0 lg:flex-row flex-col lg:space-y-0 space-y-4 lg:bg-transparent bg-white lg:p-0 p-4 lg:static absolute left-3 top-8 lg:shadow-none shadow-lg lg:rounded-none rounded-md CcoNav'>
                    <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/tool/cco/contract-settings'>Contracts Settings</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/tool/cco/co-settings'>Change Orders Settings</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/tool/cco/fieldset'>Fieldsets</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/tool/cco/custom-fields'>Custom Fields</NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default CcoNav