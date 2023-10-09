import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserDashboard from './UserDashboard';
import UserProfile from './UserProfile';
import BalanceLeft from './BalanceLeft';
import MakeTransaction from './MakeTransaction';

function BankInfoController() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<UserDashboard/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default BankInfoController
