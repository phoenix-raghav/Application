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
  const [HpHeading, setHeading] = useState('');
  const [disabledBtn, setDisableBtn] = useState(true);
  const [accNo, setAccNo] = useState(null);
  const [details,setDetails] = useState(null);
  const changeHeading = (heading) =>{
      setHeading(heading);
  }
  const [mode,setMode] = useState('light');
  const [navMode,setNavMode] = useState({navBg: 'bg-light', nav: 'navbar-light', navText: 'text-bg-light' })
  const changeMode = () =>{
    if(mode == 'light')
    {
      document.body.style.backgroundColor = '#393737';
      document.body.style.color = 'white';
      setNavMode({navBg: 'bg-dark', nav: 'navbar-dark', navText: 'text-bg-dark' })
    }   
    else
    {
      document.body.style.backgroundColor = 'rgb(234, 201, 234)';
      document.body.style.color = 'black';
      setNavMode({navBg: 'bg-light', nav: 'navbar-light', navText: 'text-bg-light' })
    }
    setMode(mode == 'light' ? 'dark':'light');
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
            <Route path='/' element={<HomePage mode={mode} ele={<HomePageContent setHpHeading={changeHeading}/>} HpHeading={HpHeading}/>}></Route>
            <Route path='/login' element={<HomePage mode={mode} ele={<Login setDetails={setDetails} setDisableBtn={setDisableBtn} disabledBtn={disabledBtn} setHpHeading={changeHeading} disableBtn={disableBtn}/>} HpHeading={HpHeading}/>}></Route>
            <Route path='/signup' element={<HomePage mode={mode} ele={<SignUp setDetails={setDetails} setDisableBtn={setDisableBtn} disabledBtn={disabledBtn} setHpHeading={changeHeading} disableBtn={disableBtn}/>}  HpHeading={HpHeading}/>}></Route>
            <Route path='/create' element={<HomePage mode={mode} ele={<CreateAccount setAccNo={setAccNo} setDisableBtn={setDisableBtn} disabledBtn={disabledBtn} setHpHeading={changeHeading} disableBtn={disableBtn}/>}  HpHeading={HpHeading}/>}></Route>
            <Route path='/accountNo' element={<HomePage mode={mode} ele={<AccountDisplay setHpHeading={changeHeading} accNo={accNo}/>}  HpHeading={HpHeading}/>}></Route>
            <Route path='/user' element={<UserDashboard mode={mode} setMode={changeMode} navMode={navMode}/>}></Route> 
            <Route path='/user/profile' element={<UserProfile details={details}/>}></Route> 
            <Route path='/user/balance' element={<BalanceLeft details={details}/>}></Route> 
            <Route path='/user/transfer' element={<MakeTransaction setDetails={setDetails} details={details} setDisableBtn={setDisableBtn} disabledBtn={disabledBtn} disableBtn={disableBtn}/>}></Route> 
            <Route path='/user/miniStatement' element={<MiniStatement details={details}/>}></Route> 
          </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
