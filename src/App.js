import './App.css';
import React, { Component } from "react";
import {  BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import Header from './components/header/header.component';
import { auth , createUserProfileDocument } from './firebase/firebase.utils';
import SignInAndSignUpPage from './Pages/signIn/sign.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser:null
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      this.setState({currentUser: userAuth});
   
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){

    return (
      <div>
      <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route exact path='/shop' element={<ShopPage/>} />
          <Route exact path="/signin"element={<SignInAndSignUpPage/>}/>
          </Routes>
          </div>
  
    
    );
  }
  
}

export default App;
