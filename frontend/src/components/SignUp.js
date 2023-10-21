import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { authFunc } from './HelperFunc';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/actionCreators';

function SignUp() {

    const nav = useNavigate();
    const dispatch = useDispatch();
    const disableBtn = useSelector(state=>state.disableBtn);
    const x = bindActionCreators(actionCreators,dispatch); 
    x.actionHeading("Sign Up to Link your Bank Account");

    useEffect(()=>{
        x.disableButton();
      },[])
      
  return (
    <>
        <div id="HpLeftContent">
            <div className="invalidDetails"></div>
            <div className='loginCredentials'>
                <span>Account No. : </span>
                <input type="number" placeholder='Enter your account number' onChange={()=>x.checkButton('loginCredentials')}/>
            </div>
            <div className='loginCredentials'>
                <span>Username : </span>
                <input type="text" placeholder='Enter your username' onChange={()=>x.checkButton('loginCredentials')}/>
            </div>
            <div className='loginCredentials'>
                <span>Password : </span>
                <input type="password" placeholder='Enter your password' onChange={()=>x.checkButton('loginCredentials')}/>
            </div>
            <button className='btn' onClick={()=>{authFunc('/signUp',true,nav,x.setUserDetails)}} id='signUpBtn' disabled={disableBtn}>Sign Up</button>
            <p><Link to="/login">Login</Link></p>
        </div>
    </>
  )
}

export default SignUp
