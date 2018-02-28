import React from "react";
import PropTypes from 'prop-types'
import { Line } from "react-chartjs-2"

const TimeSeries = ({data = []}) => {

    const chartData = {
        labels: data.map(r => ((r.t - new Date().getTime())/1000) + "s" ),
        datasets: [
          {
            label: 'Active sessions',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(0, 123, 255, 0.4)',
            borderColor: 'rgb(0, 123, 255)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgb(0, 123, 255)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgb(0, 123, 255)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data.map(r => r.count)
          }
        ]
      };

    return (<Line data={chartData} height="78px"/>);
};

TimeSeries.propTypes = {
    data: PropTypes.array
}

export default TimeSeries;