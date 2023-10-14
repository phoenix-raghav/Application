import React, { useEffect } from 'react'
import { makeTransaction } from './HelperFunc';
import { useNavigate } from 'react-router-dom';
import { verifyUser } from './HelperFunc'

function MakeTransaction(props) {
    const nav = useNavigate();
    useEffect(()=>{
      verifyUser(nav);
      props.setDisableBtn(true);
    },[])
  return (
    <>
        <div id='MTScr'>
            <div id='MTLeftSec'>
                <div>
                    <div className="invalidDetails"></div>
                    <div className='MTInputs'><span>Account No. </span> : <input type="number" placeholder='Enter account number' onChange={()=>props.disableBtn('MTInputs','payBtn')}/></div>
                    <div className='MTInputs'><span>Username </span> : <input type="text" placeholder='Enter username' onChange={()=>props.disableBtn('MTInputs','payBtn')}/></div>
                    <div className='MTInputs'><span>Amount </span> : <input type="number" placeholder='Enter amount' onChange={()=>props.disableBtn('MTInputs','payBtn')}/></div>
                    <div className='MTInputs'><span>Password </span> : <input type="text" placeholder='Enter password' onChange={()=>props.disableBtn('MTInputs','payBtn')}/></div>
                    <div className='MTInputs'><button className='btn' id='payBtn' disabled={props.disabledBtn} onClick={()=>{makeTransaction('/transaction',props.details, props.setDetails)}}>Pay</button></div>
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
