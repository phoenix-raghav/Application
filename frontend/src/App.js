import { useState } from 'react';
import './App.css';
import BankInfoController from './components/BankInfoController';
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


function App() {
  const [HpHeading, setHeading] = useState('');
  const [disabledBtn, setDisableBtn] = useState(true);
  const [accNo, setAccNo] = useState(null);

  const changeHeading = (heading) =>{
      setHeading(heading);
  }

  const disableBtn = (items,btn) =>{
      setDisableBtn(false);
      document.querySelectorAll('.'+items + ' input').forEach(element=>{
          if(element.value=='')
          {
              setDisableBtn(true);
              return;
          }
      })
  }

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage ele={<HomePageContent setHpHeading={changeHeading}/>} HpHeading={HpHeading}/>}></Route>
            <Route path='/login' element={<HomePage ele={<Login setDisableBtn={setDisableBtn} disabledBtn={disabledBtn} setHpHeading={changeHeading} disableBtn={disableBtn}/>} HpHeading={HpHeading}/>}></Route>
            <Route path='/signup' element={<HomePage ele={<SignUp setDisableBtn={setDisableBtn} disabledBtn={disabledBtn} setHpHeading={changeHeading} disableBtn={disableBtn}/>}  HpHeading={HpHeading}/>}></Route>
            <Route path='/create' element={<HomePage ele={<CreateAccount setAccNo={setAccNo} setDisableBtn={setDisableBtn} disabledBtn={disabledBtn} setHpHeading={changeHeading} disableBtn={disableBtn}/>}  HpHeading={HpHeading}/>}></Route>
            <Route path='/accountNo' element={<HomePage ele={<AccountDisplay setHpHeading={changeHeading} accNo={accNo}/>}  HpHeading={HpHeading}/>}></Route>
            <Route path='/user' element={<UserDashboard/>}></Route> 
            <Route path='/user/profile' element={<UserProfile/>}></Route> 
            <Route path='/user/balance' element={<BalanceLeft/>}></Route> 
          </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
