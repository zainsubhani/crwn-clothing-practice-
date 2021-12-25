import './App.css';
import React, { Component } from "react";
import {  BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import Header from './components/header/header.component';
function App() {
  return (
    <div>
    <Header/>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/shop' element={<ShopPage/>} />
        </Routes>
        </div>

  
  );
}

export default App;
