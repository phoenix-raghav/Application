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
  const [details,setDetails] = useState(null);

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage ele={<HomePageContent/>}/>}></Route>
            <Route path='/login' element={<HomePage ele={<Login setDetails={setDetails}/>}/>}></Route>
            <Route path='/signup' element={<HomePage ele={<SignUp setDetails={setDetails}/>}/>}></Route>
            <Route path='/create' element={<HomePage ele={<CreateAccount/>}/>}></Route>
            <Route path='/accountNo' element={<HomePage ele={<AccountDisplay/>}/>}></Route>
            <Route path='/user' element={<UserDashboard/>}></Route> 
            <Route path='/user/profile' element={<UserProfile details={details}/>}></Route> 
            <Route path='/user/balance' element={<BalanceLeft details={details}/>}></Route> 
            <Route path='/user/transfer' element={<MakeTransaction setDetails={setDetails} details={details}/>}></Route> 
            <Route path='/user/miniStatement' element={<MiniStatement details={details}/>}></Route> 
          </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
