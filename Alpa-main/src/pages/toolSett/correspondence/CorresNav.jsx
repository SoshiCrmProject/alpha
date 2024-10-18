import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { IoMdArrowDropdown } from 'react-icons/io'

const CorresNav = () => {

    const toggleDropDown = () => {
        const CorresNav = document.querySelector('.CorresNav')
        CorresNav.classList.toggle('hidden')
        CorresNav.classList.toggle('flex')
    }

    return (
        <div className='md:px-12 px-6'>
            <div className='flex space-x-6 border-b items-center pb-0 relative'>
                <h3 onClick={toggleDropDown} className='font-semibold text-lg pb-1 flex items-center'>
                    Correspondence <IoMdArrowDropdown className='ml-2 md:hidden block' />
                </h3>
                <div className='md:flex hidden md:space-x-5 md:ml-5 ml-0 md:flex-row flex-col md:space-y-0 space-y-4 md:bg-transparent bg-white md:p-0 p-4 md:static absolute left-2 top-[32px] md:shadow-none shadow-md md:rounded-none rounded-md CorresNav'>
                    <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/tool/correspondence/types'>Types</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/tool/correspondence/fieldset'>Fieldsets</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/tool/correspondence/custom-fields'>Custom Fields</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/tool/correspondence/statuses'>Statuses</NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default CorresNav