
import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from './pages/homepage/homepage.component';
import "./App.scss"



import Login from './components/login/login.component'
import SignUp from './components/login/signup';
import ShopPage from './pages/shop/shop.component';

import { auth, createUserProfile } from "./firebase/firebase-utils";
import Header from './components/header';

class App extends React.Component {

  constructor() {
    
    super();
    this.state = {
      isLoggedIn: false,
      currentUser : null
    }
  
  }

 

  unsubscribeFromAuth = null

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>  {
            if(userAuth) {
                const userRef =  await createUserProfile(userAuth);
                userRef.onSnapshot((snapshot) => {

                  this.setState({
                    currentUser : {
                      id: snapshot.id,
                      ...snapshot.data()
                    }
                  })
                });
            }
            this.setState({currentUser: userAuth})  
    });
      
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} isLoggedIn={this.state.isLoggedIn}  />
        <Routes> 
            <Route path="*" element={<Navigate to ="/" />}/>
            <Route path='/' element={<HomePage />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/login' element={<Login currentUser={this.state.currentUser} isLoggedIn={this.state.isLoggedIn} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
