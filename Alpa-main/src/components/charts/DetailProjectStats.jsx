import React from 'react'
import Chart from 'react-apexcharts'

const DetailProjectStats = () => {

    const programLabel = ['Blank', 'United Surgical Partners', 'Acadia', 'Alpa Construction', 'Medical Billing', 'Opolo behaviour', 'Summit', 'AFM', 'UHS'];
    const stageLabel = ['Blank', 'Construction', 'Completed', 'In Progress'];
    const typeLabel = ['Blank', 'Construction', 'Completed', 'In Progress'];

    const optionsProgram = {
        chart: {
            type: 'donut',
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '50%',
                }
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            position: 'right',
            horizontalAlign: 'center',
            itemMargin: {
                vertical: 5,
            },
            formatter: (seriesName, opts) => {
                return `${seriesName} (${opts.w.globals.series[opts.seriesIndex]}%)`;
            },
        },
        labels: programLabel,
    };

    const optionsStage = {
        ...optionsProgram,
        labels: stageLabel,
    };

    const optionsType = {
        ...optionsProgram,
        labels: typeLabel,
    };

    const programSeries = [1, 4, 0, 10, 0, 0, 3, 0, 7];
    const stageSeries = [2, 10, 49, 3];
    const typeSeries = [3, 8, 45, 1];

    return (
        <div className='flex flex-col space-y-4'>
            <div className='w-full border border-gray-200 p-3 rounded-xl'>
                <h3 className='font-semibold'>Projects by Program</h3>
                <Chart
                    options={optionsProgram}
                    series={programSeries}
                    type='donut'
                    width='100%'
                    height={300}
                />
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                <div className='w-full border border-gray-200 p-3 rounded-xl'>
                    <h3 className='font-semibold'>Projects by Stage</h3>
                    <Chart
                        options={optionsStage}
                        series={stageSeries}
                        type='donut'
                        width='100%'
                        height={250}
                    />
                </div>
                <div className='w-full border border-gray-200 p-3 rounded-xl'>
                    <h3 className='font-semibold'>Projects by Type</h3>
                    <Chart
                        options={optionsType}
                        series={typeSeries}
                        type='donut'
                        width='100%'
                        height={250}
                    />
                </div>
            </div>
        </div>
    )
}

export default DetailProjectStats
