import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import withRouter, { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/actionCreators';
function AccountDisplay(props) {

  const dispatch = useDispatch();
  const accNo = useSelector(state=>state.accountNo);
  const {actionHeading} = bindActionCreators(actionCreators,dispatch); 
  actionHeading("Account Details");
  
  return (
    <>
        <div id="dispAccNo">
            <div><b>Your Account Number is :</b> {accNo}</div>
            <div>
              <Link to="/signup"><button id="signUpBtn" className='btn'>Sign Up</button></Link>
            </div>
        </div>
    </>
  )
}

export default AccountDisplay
