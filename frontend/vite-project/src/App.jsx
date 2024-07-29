import React from 'react';
import App from './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/home/Home';

const App = () => {
  return <>
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
  </BrowserRouter>
  </> 
}

export default App
