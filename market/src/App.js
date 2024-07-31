import React from 'react';
import './App.css';
import Header from './Header/header';
import Main from './Main/main';
import About from './About/about';
import Basket from './Basket/basket';
import NewPaLog from './NewPage/newpage-login';
import { Route,Routes ,BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import NewPageSign from './NewPage/newpage-signup';
function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Header />
      <Routes>
        <Route path='/About' exact Component={About}/>
        <Route path='/' exact Component={Main}/>
        <Route path='Log-In' Component={NewPaLog}/>
        <Route path='Sign-Up' Component={NewPageSign}/>
        <Route path='/Basket-Shopping' Component={()=><Basket/>}/>
      </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
