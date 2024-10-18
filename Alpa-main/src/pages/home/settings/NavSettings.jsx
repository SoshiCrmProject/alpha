import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const NavSettings = () => {
    return (
        <div className='md:px-8 px-5'>
            <h1 className='text-xl text-gray-700 border-b pb-1'>Settings</h1>
            <div className='mr-[190px]'>
                <Outlet />
            </div>
            <ul className='sidebarSettings text-[0.8rem] absolute top-14 bg-white right-0 py-3 w-[190px] border-l'>
                <li>
                    <NavLink to='/settings/account-info' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Account</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/user-types' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>User Types</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/users' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Users</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/sso' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>SSO</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/address-book' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Address Book</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/groups' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Groups</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/projects' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Projects</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/bid-forms' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Bid Forms</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/schedule' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Schedule</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/rfi' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>RFI</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/submittals' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Submittals</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/punch-list' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Punch List</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/action-items' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Action Items</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/time-cards' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Time Cards</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/cost-codes' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Cost Codes</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/tax-codes' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Tax Codes</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/contracts' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Contracts</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/commitments' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Commitments</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/change-requests' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Change Requests</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/direct-costs' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Direct Costs</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/invoicing' className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}>Invoicing</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavSettings