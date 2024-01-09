import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes } from 'react-router-dom';

const App = () => {
  return (
   <BrowserRouter >
    <div className='app-wrapper'>
      <Header/> 
      <Navbar/>
      <div className='app-wrapper-content'>
        {/* <Routes path='/dialogs' component={Dialogs}/>
        <Routes path='/profile' component={Profile}/> */}
      <Dialogs/>
      <Profile/>
      </div>  
    </div>
    </BrowserRouter>
    )
}

export default App;
