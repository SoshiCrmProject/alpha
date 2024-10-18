import React, { useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Outlet, NavLink } from 'react-router-dom'
import { IoMdArrowDropdown } from 'react-icons/io'

const ProjectNav = ({ fontSize, paddingX = '0 24px', marginR = '0' }) => {

  const toggleProjectNav = () => {
    const projectNav = document.querySelector('.projectNav')
    projectNav.classList.toggle('hidden')
    projectNav.classList.toggle('flex')
  }

  const toggleDropDown = () => {
    const projectNav = document.querySelector('.financialViews')
    projectNav.classList.toggle('hidden')
    projectNav.classList.toggle('flex')
  }

  return (
    <div style={{ padding: paddingX }}>
      <div style={{ fontSize, marginRight: marginR }} className='flex border-b items-center my-3 text-sm relative'>
        <h3 onClick={toggleProjectNav} className='font-semibold text-lg -mt-2 flex items-center'>
          My Projects <IoMdArrowDropdown className='ml-2 lg:hidden block' />
        </h3>
        <div className='lg:flex lg:space-x-4 lg:ml-4 items-center hidden lg:static absolute -left-5 top-5 lg:flex-row flex-col lg:bg-transparent bg-white lg:p-0 p-3 projectNav lg:text-sm text-[0.9rem] lg:shadow-none shadow-md lg:z-10 z-30'>
          <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-2' : 'pb-2')} to='/projects/executive-dashboard'>Executive Dashboard</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-2' : 'pb-2')} to='/projects/health-dashboard'>Health Dashboard</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-2' : 'pb-2')} to='/projects/open-items'>My Open items</NavLink>
          <NavLink onClick={toggleDropDown} className={`flex items-center pb-2`} to='#'>
            Financial Views <IoMdArrowDropdown className='ml-2' />
          </NavLink>
          <ul className='flex-col space-y-4 hidden bg-white p-4 absolute lg:top-7 lg:right-[20rem] right-[-13rem] top-[8.75rem] shadow-lg rounded-md financialViews'>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'text-orange-400' : '')} to='/projects/financial/budget-variance'>Budget Variance</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'text-orange-400' : '')} to='/projects/financial/contract-variance'>Contract Variance</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'text-orange-400' : '')} to='/projects/financial/contract-summary'>Contract Summary</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'text-orange-400' : '')} to='/projects/financial/commitment-summary'>Commitment Summary</NavLink>
            </li>
          </ul>
        </div>
        <button style={{ marginLeft: 'auto' }} className='bg-orange-400 text-white px-3 py-1.5 rounded-full flex items-center -mt-4'><FaPlus className='mr-2' /> Create Project</button>
      </div>
      <Outlet />
      {/* <div className='absolute top-0 right-0 w-64 min-h-screen bg-white'>
        <h5 className='text-orange-400 border-b pb-1 my-2 text-lg'>User Projects</h5>
        <div>
          <p className='text-sm my-4'>All Listed Projects</p>
          <div className='flex space-x-5 p-2.5 border border-orange-400 rounded-2xl text-sm'>
            <img src="https://picsum.photos/200/300" className='w-12 h-12 rounded-xl' alt="project img" />
            <div>
              <p className='text-orange-400 mb-1'>Acadia - Balmont Replacement Facility</p>
              <p className='text-gray-500 mb-1'>Client Name</p>
              <p className='text-black mb-1'>Job Running Total: $ 765.88</p>
              <p className='text-gray-500'>Location: St 3, Omaha</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default ProjectNav