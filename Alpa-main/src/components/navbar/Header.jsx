import React from 'react'
import { FaBars, FaUser } from 'react-icons/fa'
import rightArrow from '../../assets/right_arrow.png'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { IoMdArrowDropdown } from 'react-icons/io'
import { coreToolsRoutes, pmRoutes, isActivePath } from '../../utils/routesConfig'

const Header = ({ toggleSideBar }) => {

    const location = useLocation()
    const isCoreToolsActive = isActivePath(location, coreToolsRoutes)

    const isPmActive = isActivePath(location, pmRoutes)

    const toggleHeader = () => {
        const header = document.querySelector('.headerItems')
        header.classList.toggle('hidden')
        header.classList.toggle('flex')
    }

    return (
        <header className='flex lg:justify-between lg:px-10 px-7 py-3 items-center bg-white border-b fixed w-full top-0 z-30'>
            <div>
                <FaBars onClick={toggleSideBar} />
            </div>
            <div className='lg:hidden block ml-6'>
                <button onClick={toggleHeader} className='bg-[#1C2852] text-white px-3 py-1 rounded-md flex items-center'>
                    Navigate <IoMdArrowDropdown className='ml-2' />
                </button>
            </div>
            <ul className='lg:flex hidden lg:flex-row flex-col lg:static absolute left-14 top-14 lg:bg-transparent bg-white lg:py-0 lg:px-0 py-3 px-5 lg:rounded-none rounded-md lg:shadow-none shadow-lg headerItems'>
                <li>
                    <NavLink className={`${isCoreToolsActive ? 'text-orange-400' : ''}`} to='/'>Core Tools</NavLink>
                </li>
                <li>
                    <NavLink className={`${isPmActive ? 'text-orange-400' : ''}`} to='/pm/quality-and-safety'>Project Management</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Financial Management</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Preconstruction</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Custom Tools</NavLink>
                </li>
            </ul>
            <div className='lg:ml-0 ml-auto flex items-center gap-3'>
                <Link to='/profile/info' className='bg-gray-200 text-gray-400 rounded-full p-2 text-[1.3rem] overflow-hidden'>
                    <FaUser />
                </Link>
                <button className='flex items-center border outline-none border-[#1C2852] py-2 px-2.5 rounded-full text-[#1C2852]'>
                    <img src={rightArrow} className='me-2' />Logout</button>
            </div>
        </header>
    )
}

export default Header