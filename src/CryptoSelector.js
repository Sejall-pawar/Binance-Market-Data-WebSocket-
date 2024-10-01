import React from 'react';

const CryptoSelector = ({ setSelectedSymbol }) => {
  const handleSelection = (event) => {
    setSelectedSymbol(event.target.value);
  };

  return (
    <select onChange={handleSelection}>
      <option value="ethusdt">ETH/USDT</option>
      <option value="bnbusdt">BNB/USDT</option>
      <option value="dotusdt">DOT/USDT</option>
    </select>
  );
};

export default CryptoSelector;
