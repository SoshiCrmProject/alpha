import React, { useState } from 'react'
import Header from '../components/navbar/Header'
import SideNav from '../components/navbar/SideNav'
import { Outlet } from 'react-router-dom'

const CompanyLayout = () => {

    const [activeSidebar, setActiveSidebar] = useState(false)
    const toggleSidebar = () => {
        setActiveSidebar(!activeSidebar)
    }

    return (
        <>
            <aside className={`bg-white sidenav fixed top-0 z-50 shadow-xl w-[290px] transition-all duration-300 ${activeSidebar ? 'left-0' : '-left-72'} lg:left-0`}>
                <SideNav />
            </aside>
            <div onClick={toggleSidebar} className={`overlay bg-black opacity-50 fixed top-0 left-0 w-full h-full z-40 transition-all duration-300 ${activeSidebar ? 'block' : 'hidden'}`}></div>
            <Header toggleSideBar={toggleSidebar} />
            <main className='lg:ms-[290px] lg:pt-24 pt-20'>
                <Outlet />
            </main>
        </>
    )
}

export default CompanyLayout