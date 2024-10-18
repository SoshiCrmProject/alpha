import React from 'react'
import Chart from 'react-apexcharts'

const ProjectStatsBar = () => {

    const options = {
        chart: {
            type: 'donut',
        },
        labels: ['Construction', 'Blank', 'Completed', 'In Progress'],
        plotOptions: {
            pie: {
                donut: {
                    size: '50%',
                }
            },
        },
        colors: ['#FF4560', '#775DD0', '#00E396', '#FEB019'],
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
                return `${seriesName} (${opts.w.globals.series[opts.seriesIndex]}%)`;
            },
        },
    };

    const series = [25, 35, 15, 25]; // Example data
    return (
        <div className='mt-32'>
            <div className='flex flex-col bg-white p-3 border border-gray-300 rounded-2xl h-full w-full'>
                <h3 className='font-semibold mb-2'>Projects by Stage</h3>
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    height={300}
                />
            </div>
            <div className='flex flex-col bg-white p-3 border border-gray-300 my-3 rounded-2xl h-full w-full'>
                <h3 className='font-semibold mb-2'>Projects by Stage</h3>
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    height={300}
                />
            </div>
        </div>
    )
}

export default ProjectStatsBar