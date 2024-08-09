import React from 'react';
import HomePage from './Pages/HomePage/HomePage';
import './App.css';
import Header from './components/Header/Header';

const App = () => (
  <div className="app-container">
    <Header/>
    <HomePage />
  </div>
);

export default App;
