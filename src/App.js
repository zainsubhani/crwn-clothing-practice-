import './App.css';
import React, { Component } from "react";
import {  BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './Pages/signIn/sign.component';
function App() {
  return (
    <div>
    <Header/>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/shop' element={<ShopPage/>} />
        <Route exact path="/signin"element={<SignInAndSignUpPage/>}/>
        </Routes>
        </div>

  
  );
}

export default App;
