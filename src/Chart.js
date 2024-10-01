import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, CandlestickController, TimeScale } from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, TimeScale, CandlestickController);

const ChartComponent = ({ data }) => {
  const chartData = {
    datasets: [{
      label: 'Candlestick Chart',
      data: data.map(candle => ({
        x: candle.time,
        o: candle.open,
        h: candle.high,
        l: candle.low,
        c: candle.close,
      })),
    }],
  };

  const options = {
    scales: {
      x: { type: 'time', time: { unit: 'minute' } },
    },
  };

  return (
    <Chart type="candlestick" data={chartData} options={options} />
  );
};

export default ChartComponent;
