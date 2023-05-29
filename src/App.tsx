import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import Logotype from './components/logotype';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logotype />
        <Navbar className=""/>
      </header>
    </div>
  );
}

export default App;
