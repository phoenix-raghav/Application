import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePageContent from './HomePageContent'
import Login from './Login'
import SignUp from './SignUp'
import CreateAccount from './CreateAccount'
import AccountDisplay from './AccountDisplay'

function HomePage() {
    const [HpHeading, setHeading] = useState('');
    const [disabledBtn, setDisableBtn] = useState(true);

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
        <div id="HpScr" className='noSpacing'>
            <div id="HpInnerScr">
                <div id="HpHeading">
                    <h1>{HpHeading}</h1>
                </div>
                <div id="HpSections">
                    <div id="HpLeftSec">
                        <BrowserRouter basename='/'>
                            <Routes>
                                <Route path='/' element={<HomePageContent setHpHeading={changeHeading}/>}></Route>
                                <Route path='/login' element={<Login setDisableBtn={setDisableBtn} disabledBtn={disabledBtn} setHpHeading={changeHeading} disableBtn={disableBtn}/>}></Route>
                                <Route path='/signup' element={<SignUp setDisableBtn={setDisableBtn} disabledBtn={disabledBtn} setHpHeading={changeHeading} disableBtn={disableBtn}/>}></Route>
                                <Route path='/create' element={<CreateAccount setDisableBtn={setDisableBtn} disabledBtn={disabledBtn} setHpHeading={changeHeading} disableBtn={disableBtn}/>}></Route>
                                <Route path='/accountNo' element={<AccountDisplay setHpHeading={changeHeading}/>}></Route>
                            </Routes>
                        </BrowserRouter>
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
