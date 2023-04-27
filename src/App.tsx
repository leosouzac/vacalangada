import React from 'react';
import logo from './logo.svg';
import './App.css';
import Countdown from './components/Countdown';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
      <Countdown targetDate={new Date('2023-09-30 08:00')}/>
      </header>
    </div>
  );
}

export default App;

