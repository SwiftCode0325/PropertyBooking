import React from 'react';
import ReactApexChart from 'react-apexcharts';

// Sample data to replace the `series.monthDataSeries1` placeholder
const seriesData = {
  monthDataSeries1: {
    prices: [8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2],
    dates: ['2018-09-19T00:00:00', '2018-09-20T00:00:00', '2018-09-21T00:00:00', '2018-09-22T00:00:00', '2018-09-23T00:00:00', '2018-09-24T00:00:00', '2018-09-25T00:00:00', '2018-09-26T00:00:00', '2018-09-27T00:00:00', '2018-09-28T00:00:00', '2018-09-29T00:00:00', '2018-09-30T00:00:00']
  }
};

class VisitorChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: "STOCK ABC",
        data: seriesData.monthDataSeries1.prices // Use the sample data here
      }],
      options: {
        chart: {
          type: 'area',
          height: 350,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        labels: seriesData.monthDataSeries1.dates, // Use the sample data here
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: 'left'
        }
      }
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
        </div>
      </div>
    );
  }
}

export default VisitorChart;
