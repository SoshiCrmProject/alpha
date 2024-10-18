import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

const ProfileNav = () => {
    return (
        <div>
            <div className='mb-4 border-b'>
                <img className='h-[66px] px-3 pt-4' src={logo} alt="Alpa" />
            </div>
            <h3 className='font-semibold text-lg my-3 ml-4'>My Profile</h3>
            <ul className='px-3'>
                <li>
                    <NavLink to='/profile/info' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Personal</NavLink>
                </li>
                <li>
                    <NavLink to='/profile/login' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Login</NavLink>
                </li>
                <li>
                    <NavLink to='/profile/connectedapp' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''} style={{ paddingRight: '15px' }}>My Connected App</NavLink>
                </li>
                <li>
                    <NavLink to='/profile/password' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Password</NavLink>
                </li>
                <li>
                    <NavLink to='/profile/notification' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Notification</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default ProfileNav