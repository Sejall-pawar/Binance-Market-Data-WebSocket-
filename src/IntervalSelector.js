import React from 'react';

const IntervalSelector = ({ setInterval }) => {
  const handleIntervalChange = (event) => {
    setInterval(event.target.value);
  };

  return (
    <select onChange={handleIntervalChange}>
      <option value="1m">1 Minute</option>
      <option value="3m">3 Minutes</option>
      <option value="5m">5 Minutes</option>
    </select>
  );
};

export default IntervalSelector;
