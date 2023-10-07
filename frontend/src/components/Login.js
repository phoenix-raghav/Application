import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { authFunc } from './HelperFunc';

function Login(props) {
  props.setHpHeading('Login to view your Account Details');
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
            <button className='btn' id='loginBtn' onClick={()=>{authFunc('/login',false)}} disabled={props.disabledBtn}>Login</button>
            <p>Haven't linked yet, Don't worry <Link to="/signup">Sign Up</Link></p>
        </div>
    </>
  )
}

export default Login
