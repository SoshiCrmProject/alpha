import React, { useState } from 'react'
import Header from '../components/navbar/Header'
import { Outlet } from 'react-router-dom'
import PmNav from '../components/navbar/PmNav'

const PmLayout = () => {

    const [activeSidebar, setActiveSidebar] = useState(false)
    const toggleSidebar = () => {
        setActiveSidebar(!activeSidebar)
    }

    return (
        <>
            <aside className={`bg-white shadow-xl w-[265px] min-h-screen fixed top-0 transition-all duration-200 z-50 ${activeSidebar ? 'left-0' : '-left-72'} lg:left-0`}>
                <PmNav />
            </aside>
            <div onClick={toggleSidebar} className={`overlay bg-black opacity-50 fixed top-0 left-0 w-full h-full z-40 transition-all duration-300 ${activeSidebar ? 'block' : 'hidden'}`}></div>
            <Header toggleSideBar={toggleSidebar} />
            <main className='lg:ms-[265px] md:pt-20 pt-20'>
                <Outlet />
            </main>
        </>
    )
}

export default PmLayout