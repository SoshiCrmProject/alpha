import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { FiClock, FiCalendar } from 'react-icons/fi';
import { AiOutlineSafety } from "react-icons/ai";
import { PiListMagnifyingGlass } from "react-icons/pi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const PmNav = () => {

    return (
        <div>
            <div className='mb-4 border-b'>
                <img className='h-[66px] px-3 pt-4' src={logo} alt="Alpa" />
            </div>
            <ul className='sidebar px-3'>
                <li>
                    <NavLink to='/pm/quality-and-safety' className={({ isActive }) => isActive ? 'bg-[#f68c281a] text-orange-400 rounded-md' : ''}><AiOutlineSafety /> Quality and Safety</NavLink>
                </li>
                <li>
                    <NavLink to='/pm/project-management' className={({ isActive }) => isActive ? 'bg-[#f68c281a] text-orange-400 rounded-md' : ''}><HiOutlineClipboardDocumentList /> Project Management</NavLink>
                </li>
                <li>
                    <NavLink to='/timecards' className={({ isActive }) => isActive ? 'bg-[#f68c281a] text-orange-400 rounded-md' : ''}><FiClock /> Time Cards</NavLink>
                </li>
                <li>
                    <NavLink to='/pm/schedule' className={({ isActive }) => isActive || location.pathname === '/pm/gantt' ? 'bg-[#f68c281a] text-orange-400 rounded-md' : ''}><FiCalendar /> Schedule</NavLink>
                </li>
                <li>
                    <NavLink to='/pm/inspection' className={({ isActive }) => isActive || location.pathname === '/pm/recycle' ? 'bg-[#f68c281a] text-orange-400 rounded-md' : ''}><PiListMagnifyingGlass /> Inspection</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default PmNav
