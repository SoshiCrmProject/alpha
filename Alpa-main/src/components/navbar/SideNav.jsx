import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { isActivePath, fieldsetRoutes, budgetRoutes, managementRoutes, ccoRoutes, correspondenceRoutes, dailylogRoutes, submittalsRoutes } from '../../utils/routesConfig'

const SideNav = () => {

    const location = useLocation()
    const isFieldsetActive = isActivePath(location, fieldsetRoutes)
    const isBudgetActive = isActivePath(location, budgetRoutes)
    const isManagementActive = isActivePath(location, managementRoutes)
    const isCcoActive = isActivePath(location, ccoRoutes)
    const isCorrespondenceActive = isActivePath(location, correspondenceRoutes)
    const isDailylogActive = isActivePath(location, dailylogRoutes)
    const isSubmittalsActive = isActivePath(location, submittalsRoutes)

    return (
        <div>
            <div className='mb-4 border-b'>
                <img className='h-[66px] px-3 pt-4' src={logo} alt="Alpa" />
            </div>
            <div className='mainSideNav'>
                <div className='border-b'>
                    <h3 className='font-bold text-lg'>Company Settings</h3>
                    <ul className=''>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''} to='/company/info'>Account Information</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''} to='/company/expense-allocation'>Expense Allocation</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''} to='/company/service-accounts'>Service Accounts</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''} to='/company/sso'>Single Sign On</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''} to='/company/trades'>Trades</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''} to='/company/uom-master-list'>Unit of Measure Master List</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''} to='/company/webhooks'>Webhooks</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''} to='/company/wbs'>Work Breakdown Structure</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='border-b'>
                    <h3 className='font-bold text-lg'>Project Settings</h3>
                    <ul>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''} to='/project/dates'>Dates</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''} to='/project/defaults'>Defaults</NavLink>
                        </li>
                        <li>
                            <NavLink className={`${isFieldsetActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}`} to='/project/fieldset'>Fieldset</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''} to='/project/roles'>Roles</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Tool Settings</h3>
                    <ul className='pb-5'>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''} to='/tool/bidding'>Bidding</NavLink>
                        </li>
                        <li>
                            <NavLink className={`${isBudgetActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}`} to='/tool/budget/view'>Budget</NavLink>
                        </li>
                        <li>
                            <NavLink className={`${isManagementActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}`} to='/tool/management/event-config'>Change Management</NavLink>
                        </li>
                        <li>
                            <NavLink className={`${isCcoActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}`} to='/tool/cco/contract-settings' style={{ paddingRight: '45px' }}>Contracts & Change Orders</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''} to='/tool/connection-manager'>Connection Manager</NavLink>
                        </li>
                        <li>
                            <NavLink className={` ${isCorrespondenceActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}`} to='/tool/correspondence/types'>Correspondence</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''} to='/tool/directory'>Directory</NavLink>
                        </li>
                        <li>
                            <NavLink className={`${isDailylogActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}`} to='/tool/dailylog/types'>Daily Log</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive || location.pathname === '/tool/project-docs/custom-fields' ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''} to='/tool/project-docs/fieldset'>Project Documents</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive || location.pathname === '/tool/drawing/custom-fields' ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''} to='/tool/drawing/fieldset'>Drawings</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive || location.pathname === '/tool/meeting/pdf-config' ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''} to='/tool/meeting/templates'>Meetings</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive || location.pathname === '/tool/rfis/custom-fields' ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''} to='/tool/rfis/fieldset'>RFIs</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive || location.pathname === '/tool/specification/custom-fields' ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''} to='/tool/specification/fieldset'>Specifications</NavLink>
                        </li>
                        <li>
                            <NavLink className={`${isSubmittalsActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''}`} to='/tool/submittals/general'>Submittals</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'border-s-4 border-orange-400 bg-[#f68c281a] text-orange-400 rounded-e' : ''} to='/tool/task'>Tasks</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideNav