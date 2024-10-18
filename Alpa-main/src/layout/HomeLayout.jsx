import React, { useState } from 'react'
import Sidebar from '../components/navbar/Sidebar'
import Header from '../components/navbar/Header'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {

    const [activeSidebar, setActiveSidebar] = useState(false)
    const toggleSidebar = () => {
        setActiveSidebar(!activeSidebar)
    }

    return (
        <>
            <aside className={`bg-white shadow-xl w-[260px] min-h-screen fixed top-0 transition-all duration-200 z-50 ${activeSidebar ? 'left-0' : '-left-72'} lg:left-0`}>
                <Sidebar />
            </aside>
            <div onClick={toggleSidebar} className={`overlay bg-black opacity-50 fixed top-0 left-0 w-full h-full z-40 transition-all duration-200 ${activeSidebar ? 'block' : 'hidden'}`}></div>
            <Header toggleSideBar={toggleSidebar} />
            <main className='pt-20 lg:ml-[260px]'>
                <Outlet />
            </main>
        </>
    )
}

export default HomeLayout