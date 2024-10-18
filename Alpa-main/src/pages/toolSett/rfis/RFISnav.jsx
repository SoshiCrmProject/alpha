import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const RFISnav = () => {
    return (
        <div className='md:px-12 px-6'>
            <div className='flex space-x-6 border-b items-center pb-0'>
                <h3 className='font-semibold text-lg pb-1'>RFIs</h3>
                <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/tool/rfis/fieldset'>Fieldsets</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/tool/rfis/custom-fields'>Custom Fields</NavLink>
            </div>
            <Outlet />
        </div>
    )
}

export default RFISnav