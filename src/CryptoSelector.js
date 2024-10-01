import React from 'react';

const CryptoSelector = ({ setSelectedSymbol }) => {
  return (
    <select onChange={(e) => setSelectedSymbol(e.target.value)}>
      <option value="ethusdt">ETH/USDT</option>
      <option value="bnbusdt">BNB/USDT</option>
      <option value="dotusdt">DOT/USDT</option>
    </select>
  );
};

export default CryptoSelector;
