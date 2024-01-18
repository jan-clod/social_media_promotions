import React from 'react';
import './App.css';
import { MainPage } from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <MainPage />
      </Routes>
    </div>
  );
}
export default App;
