import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { authFunc } from './HelperFunc';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state/actionCreators';
import { bindActionCreators } from 'redux';

function Login(props) {

  const nav = useNavigate();
  const dispatch = useDispatch();
  const {actionHeading} = bindActionCreators(actionCreators,dispatch); 
  actionHeading("Login to view your Account Details");

  useEffect(()=>{
    props.setDisableBtn(true);
  },[])
  
  return (
    <>
        <div id="HpLeftContent">
            <div className="invalidDetails"></div>
            <div className='loginCredentials'>
                <span>Username : </span>
                <input type="text" placeholder='Enter your username' onChange={()=>props.disableBtn('loginCredentials','loginBtn')}/>
            </div>
            <div className='loginCredentials'>
                <span>Password : </span>
                <input type="password" placeholder='Enter your password' onChange={()=>props.disableBtn('loginCredentials','loginBtn')}/>
            </div>
            <button className='btn' id='loginBtn' onClick={()=>{authFunc('/login',false,nav,props.setDetails)}} disabled={props.disabledBtn}>Login</button>
            <p>Haven't linked yet, Don't worry <Link to="/signup">Sign Up</Link></p>
        </div>
    </>
  )
}

export default Login
