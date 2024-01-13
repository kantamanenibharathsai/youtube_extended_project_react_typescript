import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
