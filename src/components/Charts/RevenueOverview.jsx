import React from 'react';
import ReactApexChart from 'react-apexcharts';

// Define generateDayWiseTimeSeries
function generateDayWiseTimeSeries(baseTime, count, range) {
    const series = [];
    let x = baseTime;
    for (let i = 0; i < count; i++) {
        x += 1000 * 60 * 60 * 24; // Add one day in milliseconds
        series.push([x, Math.floor(Math.random() * (range.max - range.min + 1)) + range.min]);
    }
    return series;
}

class RevenueOverview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: 'South',
                    data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                        min: 10,
                        max: 60
                    })
                },
                {
                    name: 'North',
                    data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                        min: 10,
                        max: 20
                    })
                },
                {
                    name: 'Central',
                    data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                        min: 10,
                        max: 15
                    })
                }
            ],
            options: {
                chart: {
                    type: 'area',
                    height: 350,
                    stacked: true,
                    events: {
                        selection: function (chart, e) {
                            console.log(new Date(e.xaxis.min))
                        }
                    },
                },
                colors: ['#008FFB', '#00E396', '#CED4DC'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'monotoneCubic'
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.6,
                        opacityTo: 0.8,
                    }
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left'
                },
                xaxis: {
                    type: 'datetime'
                },
            },
        };
    }

    render() {
        return (
            <div>
                <div id="chart" className='text-black'>
                    <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
                </div>
                <div id="html-dist"></div>
            </div>
        );
    }
}

export default RevenueOverview;
