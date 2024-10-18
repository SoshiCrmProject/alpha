import React from 'react'
import ScheduleBarChart from '../../../components/charts/ScheduleBarChart';
import Chart from 'react-apexcharts'
import LongBarChart from '../../../components/charts/LongBarChart';

const HealthDashboard = () => {

    const projectBudgetOptions = {
        chart: {
            type: 'donut',
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '50%',
                },
            },
        },
        dataLabels: {
            enabled: true,
        },
        labels: ['Option A', 'Option B', 'Option C'],
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            floating: false,
            itemMargin: {
                vertical: 5,
            },
        },
    }

    const projectBudgetSeries = [200000, 150000, 180000]

    const totalOverUnderOptions = {
        chart: {
            type: 'radialBar',
            offsetY: -20,
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                hollow: {
                    size: '70%',
                },
                track: {
                    background: '#fff',
                    startAngle: -135,
                    endAngle: 135,
                },
                dataLabels: {
                    value: {
                        offsetY: 10,
                        fontSize: '22px',
                        fontWeight: 'semibold',
                        formatter: (val) => `${val} kcal`,
                    },
                },
            },
        },
        labels: ['Target'],
        colors: ['#00E396'],
    };

    const totalOverUnderseries = [60];
    const totalUnderSeries = [40];

    return (
        <div>

            <div className='flex justify-between my-4'>
                <h5 className='font-semibold text-gray-700'>Health Dashboard</h5>
                <div>
                    <label htmlFor="filter">Group By:</label>
                    <select id="filter" className='outline-none border border-gray-300 py-1.5 px-2 rounded-full ml-2'>
                        <option value="">none</option>
                    </select>
                </div>
            </div>

            <div>
                <div className='w-full p-3 bg-gray-100 rounded-lg'>
                    <h6 className='mb-2 font-semibold'>Projects by Budget</h6>
                    <LongBarChart />
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-4'>
                    <div className='w-full bg-gray-100 p-3 rounded-lg'>
                        <h6 className='mb-2 font-semibold'>Projects Budget</h6>
                        <Chart options={projectBudgetOptions} series={projectBudgetSeries} type="donut" height={230} />
                    </div>
                    <div className='w-full bg-gray-100 p-3 rounded-lg'>
                        <h6 className='mb-2 font-semibold'>Total Over Under</h6>
                        <Chart type='radialBar' options={totalOverUnderOptions} series={totalOverUnderseries} height={230} />
                    </div>
                    <div className='w-full bg-gray-100 p-3 rounded-lg'>
                        <h6 className='mb-2 font-semibold'>Total Under</h6>
                        <Chart type='radialBar' options={totalOverUnderOptions} series={totalUnderSeries} height={230} />
                    </div>
                </div>
            </div>

            <div className='mt-6 mb-3 flex justify-between'>
                <h5 className='text-lg font-semibold text-gray-700'>Company Health By Project</h5>
                <div className='flex items-center text-xs space-x-4'>
                    <div className='flex items-center'>
                        <div className='w-3 h-3 bg-red-500 rounded-full mr-1'></div>
                        Over Due
                    </div>
                    <div className='flex items-center'>
                        <div className='w-3 h-3 bg-green-500 rounded-full mr-1'></div>
                        Under Due
                    </div>
                    <div className='flex items-center'>
                        <div className='w-3 h-3 bg-yellow-400 rounded-full mr-1'></div>
                        Data
                    </div>
                </div>
            </div>

            <div className='border rounded-md my-3 overflow-auto'>
                <table className='w-full home_page_table'>
                    <thead className='bg-gray-100 border-b'>
                        <tr>
                            <td>Project Name</td>
                            <td>Project Stage</td>
                            <td>Projected Over Under</td>
                            <td>Schedule</td>
                            <td>Submittals Past Due</td>
                            <td>RFIs Past Due</td>
                            <td>Unapproved Change Orders</td>
                            <td>Daily Logs</td>
                            <td>Punch List</td>
                            <td>Incidents</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Alpa OH</td>
                            <td>Bidding</td>
                            <td>$34080</td>
                            <td><ScheduleBarChart /></td>
                            <td><div className='w-9 h-3 bg-red-500 rounded-full'></div></td>
                            <td><div className='w-9 h-3 bg-red-500 rounded-full'></div></td>
                            <td><div className='w-9 h-3 bg-green-500 rounded-full'></div></td>
                            <td><div className='w-9 h-3 bg-slate-200 rounded-full'></div></td>
                            <td><div className='w-9 h-3 bg-slate-200 rounded-full'></div></td>
                            <td><div className='w-9 h-3 bg-yellow-400 rounded-full'></div></td>
                        </tr>
                        <tr>
                            <td>Alpa OH</td>
                            <td>Bidding</td>
                            <td>$34080</td>
                            <td><ScheduleBarChart /></td>
                            <td><div className='w-9 h-3 bg-slate-200 rounded-full'></div></td>
                            <td><div className='w-9 h-3 bg-green-500 rounded-full'></div></td>
                            <td><div className='w-9 h-3 bg-yellow-400 rounded-full'></div></td>
                            <td><div className='w-9 h-3 bg-green-500 rounded-full'></div></td>
                            <td><div className='w-9 h-3 bg-slate-200 rounded-full'></div></td>
                            <td><div className='w-9 h-3 bg-yellow-400 rounded-full'></div></td>
                        </tr>
                        <tr>
                            <td>Alpa OH</td>
                            <td>Bidding</td>
                            <td>$34080</td>
                            <td><ScheduleBarChart /></td>
                            <td><div className='w-9 h-3 bg-red-500 rounded-full'></div></td>
                            <td><div className='w-9 h-3 bg-green-500 rounded-full'></div></td>
                            <td><div className='w-9 h-3 bg-green-500 rounded-full'></div></td>
                            <td><div className='w-9 h-3 bg-slate-200 rounded-full'></div></td>
                            <td><div className='w-9 h-3 bg-red-500 rounded-full'></div></td>
                            <td><div className='w-9 h-3 bg-slate-200 rounded-full'></div></td>
                        </tr>
                        <tr>
                            <td>Alpa OH</td>
                            <td>Bidding</td>
                            <td>$34080</td>
                            <td><ScheduleBarChart /></td>
                            <td><div className='w-9 h-3 bg-green-500 rounded-full'></div></td>
                            <td><div className='w-9 h-3 bg-red-500 rounded-full'></div></td>
                            <td><div className='w-9 h-3 bg-red-500 rounded-full'></div></td>
                            <td><div className='w-9 h-3 bg-yellow-200 rounded-full'></div></td>
                            <td><div className='w-9 h-3 bg-slate-200 rounded-full'></div></td>
                            <td><div className='w-9 h-3 bg-slate-200 rounded-full'></div></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default HealthDashboard