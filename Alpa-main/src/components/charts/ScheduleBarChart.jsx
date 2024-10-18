import React from 'react';
import Chart from 'react-apexcharts';

const ScheduleBarChart = () => {
    const options = {
        chart: {
            type: 'bar',
            height: 50,
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            type: 'datetime',
            labels: {
                show: false, // Hide labels to match your design
            },
            tooltip: {
                enabled: true, // Enable tooltip on x-axis
                formatter: function (value) {
                    return new Date(value).toLocaleString(); // Show date/time in tooltip
                }
            },
        },
        yaxis: {
            show: false, // Hide y-axis labels for a cleaner look
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '40%',
                borderRadius: 3,
            },
        },
        colors: ['#f00'], // Red color for the bars
        dataLabels: {
            enabled: false, // Disable data labels
        },
        tooltip: {
            enabled: true,
            y: {
                formatter: function (value) {
                    return new Date(value).toLocaleString(); 
                },
            },
        },
        grid: {
            show: false, // Hide grid lines
        }
    };

    const series = [
        {
            data: [
                {
                    x: 'Project A',
                    y: [new Date('2024-09-01').getTime(), new Date('2024-09-30').getTime()], // Start and end dates
                }
            ],
        },
    ];

    return (
        <div>
            <Chart options={options} series={series} type="rangeBar" height={60} width={150} />
        </div>
    );
};

export default ScheduleBarChart;
