import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { authFunc } from './HelperFunc';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/actionCreators';

function SignUp(props) {

    const nav = useNavigate();
    const dispatch = useDispatch();
    const {actionHeading} = bindActionCreators(actionCreators,dispatch); 
    actionHeading("Sign Up to Link your Bank Account");

    useEffect(()=>{
        props.setDisableBtn(true);
      },[])
      
  return (
    <>
        <div id="HpLeftContent">
            <div className="invalidDetails"></div>
            <div className='loginCredentials'>
                <span>Account No. : </span>
                <input type="number" placeholder='Enter your account number' onChange={()=>props.disableBtn('loginCredentials','signUpBtn')}/>
            </div>
            <div className='loginCredentials'>
                <span>Username : </span>
                <input type="text" placeholder='Enter your username' onChange={()=>props.disableBtn('loginCredentials','signUpBtn')}/>
            </div>
            <div className='loginCredentials'>
                <span>Password : </span>
                <input type="password" placeholder='Enter your password' onChange={()=>props.disableBtn('loginCredentials','signUpBtn')}/>
            </div>
            <button className='btn' onClick={()=>{authFunc('/signUp',true,nav,props.setDetails)}} id='signUpBtn' disabled={props.disabledBtn}>Sign Up</button>
            <p><Link to="/login">Login</Link></p>
        </div>
    </>
  )
}

export default SignUp
