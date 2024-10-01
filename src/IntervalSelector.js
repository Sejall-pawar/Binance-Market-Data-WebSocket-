import React from 'react';

const IntervalSelector = ({ setInterval }) => {
  return (
    <select onChange={(e) => setInterval(e.target.value)}>
      <option value="1m">1 Minute</option>
      <option value="3m">3 Minutes</option>
      <option value="5m">5 Minutes</option>
    </select>
  );
};

export default IntervalSelector;
