import React from 'react'
import Chart from 'react-apexcharts'

const SimpleDonut = ({ height = 250 }) => {

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
            position: 'right',
            formatter: (seriesName, opts) => {
                return `${seriesName} (${opts.w.globals.series[opts.seriesIndex]}%)`;
            },
        },
    };

    const series = [25, 35, 15, 25];

    return (
        <div>
            <Chart
                options={options}
                series={series}
                type="donut"
                height={height}
            />
        </div>
    )
}

export default SimpleDonut