import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VideoPlayer from './components/full_video/FullVideo';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/videoplayer" element ={<VideoPlayer/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
