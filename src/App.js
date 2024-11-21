import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import BattleCats from './components/BattleCats';
import DragonBall from './components/DragonBall';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="background">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/battlecats" element={<BattleCats />} />
          <Route path="dragonballlegends" element={<DragonBall />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
