import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Basket } from './pages/Basket';
import { Favorite } from './pages/Favorite';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
        <Route path="/basket" element={<Basket />}></Route>
      </Routes>
    </>
  );
}

export default App;
