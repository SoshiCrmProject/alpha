import React from 'react';
import Chart from 'react-apexcharts';

const ProjectProgress = () => {
    const options = {
        chart: {
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                hollow: {
                    size: '70%',
                },
                dataLabels: {
                    showOn: 'always',
                    name: {
                        show: true,
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#6E6B7B',
                        offsetY: -10,
                    },
                    value: {
                        fontSize: '22px',
                        fontWeight: 700,
                        color: '#111',
                        offsetY: 10,
                        formatter: function (val) {
                            return `${val}%`;
                        }
                    }
                },
                track: {
                    background: '#e7e7e7',
                    strokeWidth: '100%',
                },
            }
        },
        stroke: {
            lineCap: 'round',
        },
        labels: ['Progress'],
    };

    const series = [60];

    return (
        <div className="gauge-chart">
            <h3 className="font-semibold">Project Progress</h3>
            <Chart
                options={options}
                series={series}
                type="radialBar"
                height={200}
            />
        </div>
    );
}

export default ProjectProgress;
