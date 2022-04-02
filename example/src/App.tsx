import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useIntervalTime } from 'use-interval-time';

function App() {
  return (
    <div className="App">
        Time: <div className="App-time">{ useIntervalTime().toISOString() }</div>
    </div>
  );
}

export default App;
