import React from 'react';
import Chart from 'react-apexcharts';

const TotalProjectsPie = () => {

    const options = {
        chart: {
            type: 'radialBar',
            offsetY: -20,
        },
        plotOptions: {
            radialBar: {
                startAngle: 0,
                endAngle: 360,
                hollow: {
                    size: '60%',
                },
                track: {
                    background: '#f0f0f0',
                    strokeWidth: '100%',
                },
                dataLabels: {
                    show: true,
                    name: {
                        offsetY: -10,
                        fontSize: '14px',
                    },
                    value: {
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#3B82F6',
                        offsetY: 0,
                        formatter: (val) => `${val}%`,
                    },
                    total: {
                        show: false,
                        fontSize: '14px',
                        fontWeight: 'semibold',
                        color: '#8F8F8F',
                        formatter: () => '20%',
                    }
                },
            },
        },
        labels: ['Done', 'Remaining'],
        colors: ['#3B82F6'],
    };

    const series = [20];

    return (
        <div>
            <Chart options={options} series={series} type="radialBar" height={200} />
        </div>
    );
}

export default TotalProjectsPie;
