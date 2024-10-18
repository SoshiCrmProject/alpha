import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { IoMdArrowDropdown } from 'react-icons/io'

const BudgetNav = () => {

    const toggleDropDown = () => {
        const budgetNav = document.querySelector('.budgetNav')
        budgetNav.classList.toggle('hidden')
        budgetNav.classList.toggle('flex')
    }

    return (
        <div className='md:px-12 px-6'>
            <div className='flex border-b items-center pb-0 relative'>
                <h3 onClick={toggleDropDown} className='font-semibold text-lg pb-1 flex items-center'>
                    Budget <IoMdArrowDropdown className='ml-2 sm:hidden block' />
                </h3>
                <div className='sm:flex hidden sm:space-x-5 sm:ml-5 ml-0 sm:flex-row flex-col sm:space-y-0 space-y-4 sm:bg-transparent bg-white sm:p-0 p-4 sm:static absolute -left-2 top-8 sm:shadow-none shadow-lg sm:rounded-none rounded-md budgetNav'>
                    <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/tool/budget/view'>Budget</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/tool/budget/forecasting'>Forecasting</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to='/tool/budget/change-migration'>Budget Change Migration</NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default BudgetNav