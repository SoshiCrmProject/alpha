import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const SpecNav = () => {
    return (
        <div className='md:px-12 px-6'>
            <div className='flex space-x-6 border-b items-center pb-0'>
                <h3 className='font-semibold text-lg pb-1'>Specifications</h3>
                <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/tool/specification/fieldset'>Fieldsets</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/tool/specification/custom-fields'>Custom Fields</NavLink>
            </div>
            <Outlet />
        </div>
    )
}

export default SpecNav