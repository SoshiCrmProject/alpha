import React, { useState } from 'react'
import ProfileNav from '../components/navbar/ProfileNav'
import Header from '../components/navbar/Header'
import { Outlet } from 'react-router-dom'

const ProfileLayout = () => {

    const [activeSidebar, setActiveSidebar] = useState(false)
    const toggleSidebar = () => {
        setActiveSidebar(!activeSidebar)
    }

    return (
        <>
            <aside className={`bg-white min-h-screen sidenav fixed w-[238px] shadow-xl z-50 transition-all duration-300 ${activeSidebar ? 'left-0' : '-left-64'} lg:left-0`}>
                <ProfileNav />
            </aside>
            <div onClick={toggleSidebar} className={`overlay bg-black opacity-50 fixed top-0 left-0 w-full h-full z-40 transition-all duration-300 ${activeSidebar ? 'block' : 'hidden'}`}></div>
            <Header toggleSideBar={toggleSidebar} />
            <main className='lg:ms-[238px] md:pt-20 pt-20'>
                <Outlet />
            </main>
        </>
    )
}

export default ProfileLayout