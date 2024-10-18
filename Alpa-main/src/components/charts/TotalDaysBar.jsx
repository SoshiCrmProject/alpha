import React from 'react';
import ReactApexChart from 'react-apexcharts';

const TotalDaysBar = () => {
    const options = {
        chart: {
            type: 'bar',
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '50%',
            },
        },
        dataLabels: {
            enabled: true,
        },
    };

    const series = [
        {
            data: [10, 4, 0],
        }
    ];

    return (
        <div>
            <ReactApexChart options={options} series={series} type="bar" height={150} />
        </div>
    );
};

export default TotalDaysBar;
