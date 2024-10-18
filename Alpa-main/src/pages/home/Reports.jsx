import React from 'react'
import TotalProjectsPie from '../../components/charts/TotalProjectsPie'
import TotalDaysBar from '../../components/charts/TotalDaysBar'
import SmallCalendar from '../../components/ui/SmallCalendar'
import Chart from 'react-apexcharts'

const Reports = () => {

    const totalCostOptions = {
        chart: {
            type: 'donut',
        },
        labels: ['Spent Ammount', 'Remaining Ammount'],
        plotOptions: {
            pie: {
                donut: {
                    size: '50%',
                }
            },
        },
        colors: ['#775DD0', '#FEB019'],
        dataLabels: {
            enabled: false,
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            floating: false,
            itemMargin: {
                vertical: 5,
            },
            formatter: (seriesName, opts) => {
                return `${seriesName} ($${opts.w.globals.series[opts.seriesIndex]})`;
            },
        },
    };

    const budgetOptions = { ...totalCostOptions, labels: ['Total', 'Overbudget'] };

    const totalCostSeries = [5166, 7128];
    const budgetSeries = [4000, 6000];

    return (
        <div className='px-6'>
            <div className='my-3 flex justify-between items-center'>
                <h5 className='font-semibold text-lg text-gray-700'>Reports</h5>
                <button className='bg-orange-400 text-white px-2.5 py-1.5 rounded-full text-sm'>Download Report</button>
            </div>
            <div className='w-full h-full grid grid-cols-12 gap-3 mb-4'>
                <div className='lg:col-span-9 col-span-12'>
                    <div className='w-full grid grid-cols-12 gap-2'>
                        <div className="md:col-span-4 col-span-12 p-3 border border-gray-300 rounded-lg">
                            <div>
                                <h5 className='font-semibold'>Total Projects</h5>
                                <h3 className='text-xl font-semibold'>15</h3>
                            </div>
                            <div className='flex flex-col space-x-3 mt-2'>
                                <div className='mt-2 mb-3 text-xs flex justify-center space-x-4 items-center'>
                                    <div>
                                        <span className='flex items-center'>
                                            <p className='h-3 w-3 rounded-full bg-blue-400 mr-1'></p>Done <br />
                                        </span>
                                        <p className='ml-3.5 mt-1'>3</p>
                                    </div>
                                    <div>
                                        <span className='flex items-center'>
                                            <p className='h-3 w-3 rounded-full bg-slate-300 mr-1'></p>Remaining <br />
                                        </span>
                                        <p className='ml-3.5 mt-1'>12</p>
                                    </div>
                                </div>
                                <TotalProjectsPie />
                            </div>
                        </div>
                        <div className='md:col-span-8 col-span-12 p-3 border border-gray-300 rounded-lg flex w-full'>
                            <div className='w-1/2'>
                                <div>
                                    <h5 className='font-semibold'>Total Days Alloted</h5>
                                    <h3 className='text-xl font-semibold'>14 Days</h3>
                                </div>
                                <TotalDaysBar />
                                <div className='flex flex-col space-y-3 text-xs font-[500]'>
                                    <div className='flex justify-between items-center pr-2'>
                                        <p>Work Days Spent</p>
                                        <p>10 Days</p>
                                    </div>
                                    <div className='flex justify-between items-center pr-2'>
                                        <p>Work Days Remaining</p>
                                        <p>4 Days</p>
                                    </div>
                                    <div className='flex justify-between items-center pr-2'>
                                        <p>Days Overdue</p>
                                        <p>0 Days</p>
                                    </div>
                                </div>
                            </div>
                            <div className='small_calendar w-1/2'>
                                <SmallCalendar />
                            </div>
                        </div>
                    </div>
                    <div className='w-full grid grid-cols-12 gap-4 mt-4'>
                        <div className='md:col-span-6 col-span-12 bg-white shadow-md pb-6'>
                            <div className='border-b py-3'>
                                <div className='px-3 flex justify-between items-center'>
                                    <h5 className='font-semibold text-lg'>$25,843</h5>
                                    <h6 className='font-semibold'>Total Cost</h6>
                                </div>
                            </div>
                            <div>
                                <Chart type='donut' options={totalCostOptions} series={totalCostSeries} height={200} />
                            </div>
                        </div>
                        <div className='md:col-span-6 col-span-12 bg-white shadow-md pb-6'>
                            <div className='border-b py-3'>
                                <div className='px-3 flex justify-between items-center'>
                                    <h5 className='font-semibold text-lg'>$ +5,843</h5>
                                    <h6 className='font-semibold'>Over Budget</h6>
                                </div>
                            </div>
                            <div>
                                <Chart type='donut' options={budgetOptions} series={budgetSeries} height={200} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-3 md:col-span-8 col-span-12'>
                    <div className='border border-gray-300 rounded-lg'>
                        <div className='border-b'>
                            <h5 className='px-3 py-1 font-semibold'>Paid Transactions</h5>
                        </div>
                        <div className='text-sm px-3 pt-1 pb-[200px]'>
                            <div className='flex justify-between my-3'>
                                <p>Client</p>
                                <p className='font-semibold'>$454</p>
                            </div>
                            <div className='flex justify-between my-3'>
                                <p>Project Manager</p>
                                <p className='font-semibold'>$454</p>
                            </div>
                            <div className='flex justify-between my-3'>
                                <p>Team Member 1</p>
                                <p className='font-semibold'>$454</p>
                            </div>
                            <div className='flex justify-between my-3'>
                                <p>Team Member 2</p>
                                <p className='font-semibold'>$454</p>
                            </div>
                        </div>
                        <div className='border-t flex justify-between text-sm'>
                            <p className='pl-2 py-1'>Total Payment Done</p>
                            <p className='font-semibold pr-2 py-1'>$1816</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reports