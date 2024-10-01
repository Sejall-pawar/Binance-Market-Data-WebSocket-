import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns'; 

Chart.register(...registerables);

const ChartComponent = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Candlestick Data',
        data: data.map(candle => ({
          x: new Date(candle.time),
          y: [candle.open, candle.high, candle.low, candle.close],
        })),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time', 
        time: {
          unit: 'minute', 
        },
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price',
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div>
      <h2>Candlestick Chart</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ChartComponent;
