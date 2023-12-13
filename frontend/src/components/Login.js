import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { authFunc } from './HelperFunc';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../state/actionCreators';
import { bindActionCreators } from 'redux';

function Login() {

  const nav = useNavigate();
  const disableBtn = useSelector(state=>state.disableBtn);
  const dispatch = useDispatch();
  const {actionHeading, disableButton, checkButton, setUserDetails} = bindActionCreators(actionCreators,dispatch); 
  useEffect(()=>{
    actionHeading("Login to view your Account Details");
    disableButton();
  },[])
  
  return (
    <>
        <div id="HpLeftContent">
            <div className="invalidDetails"></div>
            <div className='loginCredentials'>
                <span>Username : </span>
                <input type="text" placeholder='Enter your username' onChange={()=>checkButton('loginCredentials')}/>
            </div>
            <div className='loginCredentials'>
                <span>Password : </span>
                <input type="password" placeholder='Enter your password' onChange={()=>checkButton('loginCredentials')}/>
            </div>
            <button className='btn' id='loginBtn' onClick={()=>{authFunc('/login',false,nav,setUserDetails)}} disabled={disableBtn}>Login</button>
            <p>Haven't linked yet, Don't worry <Link to="/signup">Sign Up</Link></p>
        </div>
    </>
  )
}

export default Login
