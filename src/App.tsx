import React from 'react';
import './App.css';
import { MainPage } from './pages/MainPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}
export default App;
