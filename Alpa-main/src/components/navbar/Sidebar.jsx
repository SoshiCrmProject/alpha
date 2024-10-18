import React from 'react'
import logo from '../../assets/logo.png'
import { BsCalendar2, BsPencilSquare, BsPeople, BsCalendar3, BsClock, BsFileBarGraph, BsGear } from 'react-icons/bs';
import { NavLink, useLocation } from 'react-router-dom'
import { myProjectsRoutes, isActivePath } from '../../utils/routesConfig';

const Sidebar = () => {

    const location = useLocation()
    const isMyProjectsActive = isActivePath(location, myProjectsRoutes)

    return (
        <div>
            <div className='mb-4 border-b'>
                <img className='h-[66px] px-3 pt-4' src={logo} alt="Alpa" />
            </div>
            <ul className='sidebar px-4'>
                <li>
                    <NavLink to='/' className={`${isMyProjectsActive ? 'bg-[#f68c281a] text-orange-400 rounded' : ''}`}>
                        <BsCalendar3 /> My Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/project-invites' className={({ isActive }) => isActive ? 'bg-[#f68c281a] text-orange-400 rounded' : ''}><BsPencilSquare /> Project Invites</NavLink>
                </li>
                <li>
                    <NavLink to='/contacts' className={({ isActive }) => isActive ? 'bg-[#f68c281a] text-orange-400 rounded' : ''}><BsPeople /> Contacts</NavLink>
                </li>
                <li>
                    <NavLink to='/calendar' className={({ isActive }) => isActive ? 'bg-[#f68c281a] text-orange-400 rounded' : ''}><BsCalendar2 /> Calendar</NavLink>
                </li>
                <li>
                    <NavLink to='/timecards' className={({ isActive }) => isActive ? 'bg-[#f68c281a] text-orange-400 rounded' : ''}><BsClock /> Time Cards</NavLink>
                </li>
                <li>
                    <NavLink to='/reports' className={({ isActive }) => isActive ? 'bg-[#f68c281a] text-orange-400 rounded' : ''}><BsFileBarGraph /> Reports</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/account-info' className={({ isActive }) => isActive ? 'bg-[#f68c281a] text-orange-400 rounded' : ''}><BsGear /> Settings</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar