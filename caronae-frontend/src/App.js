import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import RideDetails from './Pages/RideDetails/RideDetails.jsx';
import './App.css';
import Header from './components/Header/Header';
import { CaronaProvider } from './context/CaronaContext';

const App = () => (
  <CaronaProvider>
    <BrowserRouter>
      <div className="app-container">
        <Header/>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/carona/:id" element={<RideDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  </CaronaProvider>
);

export default App;