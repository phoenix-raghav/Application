import React, { useEffect } from 'react'
import { makeTransaction } from './HelperFunc';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../state/actionCreators';
import { bindActionCreators } from 'redux';

function MakeTransaction() {

    const nav = useNavigate();
    const dispatch = useDispatch();
    const disableBtn = useSelector(state=>state.disableBtn);
    const user = useSelector(state=>state.userDetails);
    const x = bindActionCreators(actionCreators,dispatch); 
    
    useEffect(()=>{
      x.setUserDetails(nav);
      x.disableButton();
    },[])

  return (
    <>
        <div id='MTScr'>
            <div id='MTLeftSec'>
                <div>
                    <div className="invalidDetails"></div>
                    <div className='MTInputs'><span>Account No. </span> : <input type="number" placeholder='Enter account number' onChange={()=>x.checkButton('MTInputs')}/></div>
                    <div className='MTInputs'><span>Username </span> : <input type="text" placeholder='Enter username' onChange={()=>x.checkButton('MTInputs')}/></div>
                    <div className='MTInputs'><span>Amount </span> : <input type="number" placeholder='Enter amount' onChange={()=>x.checkButton('MTInputs')}/></div>
                    <div className='MTInputs'><span>Password </span> : <input type="text" placeholder='Enter password' onChange={()=>x.checkButton('MTInputs')}/></div>
                    <div className='MTInputs'><button className='btn' id='payBtn' disabled={disableBtn} onClick={()=>{makeTransaction('/transaction',user)}}>Pay</button></div>
                </div>
            </div>
            <div id='MTRightSec'>
                <img src="https://cdn4.vectorstock.com/i/1000x1000/89/73/colorful-background-transaction-in-cash-vector-15208973.jpg" alt="Error Loading Image" />
            </div>
        </div>
    </>
  )
}

export default MakeTransaction
