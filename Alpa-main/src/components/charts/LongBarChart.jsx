import React from 'react';
import Chart from 'react-apexcharts';

const LongBarChart = ({ colors = ['#3B82F6'] }) => {

    const options = {
        chart: {
            type: 'bar',
        },
        plotOptions: {
            bar: {
                borderRadius: 5,
                columnWidth: '45%',
                distributed: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ['United Surgical Partners', 'United Surgical Partners', 'Alpha Construction', 'Summit', 'Acadia', 'AFM', 'Opolo Behavior', 'UHS', 'Medical Billing', 'Other'],
            labels: {
                show: false,
            },
        },
        tooltip: {
            y: {
                formatter: function (value) {
                    return `$${value}`;
                },
            },
        },
        colors: colors,
    };

    const series = [
        {
            name: 'Budget',
            data: [200000, 150000, 180000, 220000, 170000, 210000, 140000, 195000, 160000, 130000],
        },
    ];

    return (
        <div>
            <Chart options={options} series={series} type="bar" height={300} />
        </div>
    )
}

export default LongBarChart;
