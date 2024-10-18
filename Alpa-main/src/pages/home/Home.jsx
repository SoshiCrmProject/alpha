import React, { useState, useEffect } from 'react'
import ProjectNav from './projects/ProjectNav'
import ProjectStatsBar from '../../components/charts/ProjectStatsBar'
import DetailProjectStats from '../../components/charts/DetailProjectStats'
import { FaSearch } from 'react-icons/fa'
import { FaAngleDoubleRight, FaAngleDoubleDown } from 'react-icons/fa'

const Home = () => {

  const [showDetail, setShowDetail] = useState(false)
  const [showStats, setShowStats] = useState(true)

  const toggleShowDetail = () => {
    setShowDetail(!showDetail)
  }

  const toggleStats = () => {
    setShowStats(!showStats)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setShowStats(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <section className={`px-6 ${!showDetail && showStats ? 'mr-[215px]' : 'mr-0'}`}>
        <ProjectNav fontSize='0.8rem' paddingX='0' marginR={showStats && !showDetail ? '0' : '124px'} />
        <div className='flex justify-between items-center mt-4'>
          <h5 className='font-semibold'>Projects</h5>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center border border-gray-300 rounded-full px-3 py-[3px] bg-transparent'>
              <FaSearch className='text-gray-500' />
              <input type="text" className='flex-1 px-3 py-[3px] border-none outline-none bg-transparent text-sm' placeholder='Search' />
            </div>
            <div>
              <label>Group By:</label>
              <select className='outline-none border border-gray-300 px-2 py-1 rounded-full ms-2'>
                <option value="1">none</option>
              </select>
            </div>
          </div>
        </div>
        <div className='mt-3 border rounded-md overflow-auto'>
          <table className='w-full home_project_table bg-gray-100'>
            <thead className='border-b'>
              <tr>
                <th>Name</th>
                <th>Project Number</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Phone</th>
                <th>Program</th>
                <th>Status</th>
                <th>Stage</th>
                <th>Type</th>
                <th>Notes</th>
                <th style={{ padding: '0 2px' }}>
                  <button onClick={toggleShowDetail}>
                    <FaAngleDoubleDown size={20} color='black' />
                  </button>
                </th>
              </tr>
            </thead>
            {!showDetail &&
              <tbody>
                <tr>
                  <td>Acadia - Belmont Replacement Facility</td>
                  <td>18-181</td>
                  <td>4200 Monument Road</td>
                  <td>Philadelphia</td>
                  <td>Pennsylvania</td>
                  <td>19131</td>
                  <td>842965</td>
                  <td>Acadia</td>
                  <td>Active</td>
                  <td>Closeout</td>
                  <td>New Building</td>
                  <td colSpan={2}>8.28 - Adam/MM; construction only</td>
                </tr>
                <tr>
                  <td>Acadia - Belmont Replacement Facility</td>
                  <td>18-181</td>
                  <td>4200 Monument Road</td>
                  <td>Philadelphia</td>
                  <td>Pennsylvania</td>
                  <td>19131</td>
                  <td>842965</td>
                  <td>Acadia</td>
                  <td>Active</td>
                  <td>Closeout</td>
                  <td>New Building</td>
                  <td colSpan={2}>8.28 - Adam/MM; construction only</td>
                </tr>
                <tr>
                  <td>Acadia - Belmont Replacement Facility</td>
                  <td>18-181</td>
                  <td>4200 Monument Road</td>
                  <td>Philadelphia</td>
                  <td>Pennsylvania</td>
                  <td>19131</td>
                  <td>842965</td>
                  <td>Acadia</td>
                  <td>Active</td>
                  <td>Closeout</td>
                  <td>New Building</td>
                  <td colSpan={2}>8.28 - Adam/MM; construction only</td>
                </tr>
                <tr>
                  <td>Acadia - Belmont Replacement Facility</td>
                  <td>18-181</td>
                  <td>4200 Monument Road</td>
                  <td>Philadelphia</td>
                  <td>Pennsylvania</td>
                  <td>19131</td>
                  <td>842965</td>
                  <td>Acadia</td>
                  <td>Active</td>
                  <td>Closeout</td>
                  <td>New Building</td>
                  <td colSpan={2}>8.28 - Adam/MM; construction only</td>
                </tr>
              </tbody>
            }
          </table>
        </div>
      </section>
      {!showDetail &&
        <div className={`top-0 w-[215px] px-2 border-l border-gray-300 bg-white min-h-screen transition-all duration-300 ${showStats ? 'absolute right-0' : 'fixed -right-64'}`}>
          <ProjectStatsBar />
        </div>
      }
      {showDetail &&
        <div className='w-full my-4 px-6 overflow-hidden'>
          <DetailProjectStats />
        </div>
      }
      <div className='absolute right-4 lg:top-[82px] top-[93px]'>
        <button onClick={toggleStats} className='flex items-center bg-orange-400 py-1 px-4 rounded-full text-white'>
          Stats <FaAngleDoubleRight className={`ml-2 ${showStats ? 'rotate-0' : 'rotate-180'} transition-all duration-300`} />
        </button>
      </div>
    </div>
  )
}

export default Home