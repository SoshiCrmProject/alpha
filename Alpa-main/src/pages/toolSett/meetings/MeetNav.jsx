import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const MeetNav = () => {
    return (
        <div>
            <div className='md:px-12 px-6'>
                <div className='flex space-x-6 border-b items-center pb-0'>
                    <h3 className='font-semibold text-lg pb-1'>Meetings</h3>
                    <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/tool/meeting/templates'>Meeting Templates</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/tool/meeting/pdf-config'>PDF Configurations</NavLink>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default MeetNav