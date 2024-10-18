import React from 'react';
import Chart from 'react-apexcharts';

const SingleProjectStats = () => {
    // Gauge chart (Project Progress)
    const gaugeOptions = {
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
                dataLabels: {
                    value: {
                        offsetY: 10,
                        fontSize: '22px',
                        fontWeight: 'bold',
                        formatter: (val) => `${val}%`,
                    },
                },
            },
        },
        labels: ['Progress'],
        colors: ['#00E396'],
    };

    const gaugeSeries = [60]; // Change this to reflect actual progress

    // Donut chart (Payment Details)
    const donutOptions = {
        chart: {
            type: 'donut',
        },
        labels: ['Remaining', 'Received'],
        plotOptions: {
            pie: {
                donut: {
                    size: '70%',
                },
            },
        },
        legend: {
            position: 'bottom',
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#A0AEC0', '#4299E1'],
    };

    const donutSeries = [60, 40]; // Update values according to payment details

    // Radial bar chart (Profit Details)
    const radialOptions = {
        chart: {
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '40%',
                },
                track: {
                    background: '#f9f9f9',
                    strokeWidth: '97%',
                    margin: 5,
                },
                dataLabels: {
                    value: {
                        fontSize: '16px',
                        fontWeight: 'bold',
                    },
                },
            },
        },
        legend: {
            position: 'bottom',
        },
        colors: ['#00E396', '#FEB019', '#FF4560'],
    };

    const radialSeries = [40, 60, 40]; // Change values based on profit details

    return (
        <div className="grid lg:grid-cols-1 gap-y-4 bg-white">
            <div className="bg-white py-3 border-b">
                <div className='px-4'>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Project Progress</h3>
                    <Chart options={gaugeOptions} series={gaugeSeries} type="radialBar" height={240} />
                    <p className="text-center text-xl font-semibold mt-4">60%</p>
                    <p className="text-center text-gray-500">Progress</p>
                </div>
            </div>

            <div className="bg-white py-3 border-b">
                <div className='px-4'>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Payment Details</h3>
                    <Chart options={donutOptions} series={donutSeries} type="donut" height={220} />
                    <p className="text-center text-xl font-semibold mt-4">$778,396.22</p>
                    <p className="text-center text-gray-500">Total price</p>
                </div>
            </div>

            <div className="bg-white py-3">
                <div className='px-4'>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Profit Details</h3>
                    <Chart options={radialOptions} series={radialSeries} type="radialBar" height={240} />
                </div>
            </div>
        </div>
    );
};

export default SingleProjectStats;
