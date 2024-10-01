import React, { useState, useEffect } from 'react';
import ChartComponent from './ChartComponent';
import CryptoSelector from './CryptoSelector';
import IntervalSelector from './IntervalSelector';
import './App.css';

const App = () => {
  const [selectedSymbol, setSelectedSymbol] = useState('ethusdt');
  const [interval, setInterval] = useState('1m');
  const [candlestickData, setCandlestickData] = useState({});
  
  useEffect(() => {
    const storedData = localStorage.getItem(selectedSymbol);
    if (storedData) {
      setCandlestickData(JSON.parse(storedData));
    }
  }, [selectedSymbol]);

  useEffect(() => {
    const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${selectedSymbol}@kline_${interval}`);
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.k) {
        const newCandle = {
          time: data.k.t,
          open: data.k.o,
          high: data.k.h,
          low: data.k.l,
          close: data.k.c,
        };
        setCandlestickData((prevData) => {
          const updatedData = [...(prevData[selectedSymbol] || []), newCandle];
          localStorage.setItem(selectedSymbol, JSON.stringify(updatedData)); 
          return { ...prevData, [selectedSymbol]: updatedData };
        });
      }
    };

    return () => ws.close();
  }, [selectedSymbol, interval]);

  return (
    <div className="app-container">
      <h1>Binance Market Data</h1>
      <div className="selectors-container">
        <CryptoSelector setSelectedSymbol={setSelectedSymbol} />
        <IntervalSelector setInterval={setInterval} />
      </div>
      <ChartComponent data={candlestickData[selectedSymbol] || []} />
    </div>
  );
};

export default App;
