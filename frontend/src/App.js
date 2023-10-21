import { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import UserDashboard from './components/UserDashboard';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePageContent from './components/HomePageContent';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CreateAccount from './components/CreateAccount';
import AccountDisplay from './components/AccountDisplay';
import UserProfile from './components/UserProfile';
import BalanceLeft from './components/BalanceLeft';
import MakeTransaction from './components/MakeTransaction';
import MiniStatement from './components/MiniStatement';


function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage ele={<HomePageContent/>}/>}></Route>
            <Route path='/login' element={<HomePage ele={<Login />}/>}></Route>
            <Route path='/signup' element={<HomePage ele={<SignUp/>}/>}></Route>
            <Route path='/create' element={<HomePage ele={<CreateAccount/>}/>}></Route>
            <Route path='/accountNo' element={<HomePage ele={<AccountDisplay/>}/>}></Route>
            <Route path='/user' element={<UserDashboard/>}></Route> 
            <Route path='/user/profile' element={<UserProfile />}></Route> 
            <Route path='/user/balance' element={<BalanceLeft/>}></Route> 
            <Route path='/user/transfer' element={<MakeTransaction/>}></Route> 
            <Route path='/user/miniStatement' element={<MiniStatement/>}></Route> 
          </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
