import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import HomePageContent from './HomePageContent'
import Login from './Login'
import SignUp from './SignUp'
import CreateAccount from './CreateAccount'
import AccountDisplay from './AccountDisplay'
import { useSelector } from 'react-redux'

function HomePage(props) {

    const heading = useSelector(state=> state.heading);
    const {mode} = useSelector(state=> state.mode);

    useEffect (() =>{
          document.getElementById('HpInnerScr').style.backgroundColor = mode == 'light' ? 'white' : '#393737';
          document.getElementById('HpScr').style.backgroundColor = mode == 'light' ? 'white' : 'black';
      });
      
  return (
    <>
        <div id="HpScr" className='noSpacing'>
            <div id="HpInnerScr">
                <div id="HpHeading">
                    <h1>{heading}</h1>
                </div>
                <div id="HpSections">
                    <div id="HpLeftSec">
                        {props.ele}
                            {/* <Routes>
                                <Route path='/' element={<HomePageContent setHpHeading={changeHeading}/>}></Route>
                                <Route path='/login' element={<Login setDisableBtn={setDisableBtn} disabledBtn={disabledBtn} setHpHeading={changeHeading} disableBtn={disableBtn}/>}></Route>
                                <Route path='/signup' element={<SignUp setDisableBtn={setDisableBtn} disabledBtn={disabledBtn} setHpHeading={changeHeading} disableBtn={disableBtn}/>}></Route>
                                <Route path='/create' element={<CreateAccount setDisableBtn={setDisableBtn} disabledBtn={disabledBtn} setHpHeading={changeHeading} disableBtn={disableBtn}/>}></Route>
                                <Route path='/accountNo' element={<AccountDisplay setHpHeading={changeHeading}/>}></Route>
                            </Routes> */}
                    </div>
                    <div id="HpRightSec">
                        <img src={process.env.PUBLIC_URL + '/HomePage_Logo.png'} alt="Error Loading Image" />
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomePage
