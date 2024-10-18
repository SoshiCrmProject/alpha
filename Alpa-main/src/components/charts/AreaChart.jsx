import React from 'react';
import ReactApexChart from 'react-apexcharts';

const AreaChart = () => {

    const options = {
        chart: {
            height: 350,
            type: 'area',
            toolbar: {
                show: false
            },
        },
        stroke: {
            curve: 'smooth', // Makes the line smooth
            width: 3,
            colors: ['#4F46E5']
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.3,
                opacityTo: 0.8,
                stops: [0, 100]
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        },
        yaxis: {
            min: 0,
            max: 5000, // As per your chart's scale
        },
        markers: {
            size: 5, // Marker size
            colors: ['#4F46E5'],
            strokeColors: '#fff',
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        },
        tooltip: {
            enabled: true
        }
    };

    const series = [
        {
            name: 'Observations',
            data: [4000, 3000, 4500, 3500, 4000, 2000, 3000, 5000, 4000, 4500, 2500, 3500]
        }
    ];

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="area" height={300} />
        </div>
    );
};

export default AreaChart;
