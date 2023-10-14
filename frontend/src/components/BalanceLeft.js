import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { verifyUser } from './HelperFunc'

function BalanceLeft(props) {
  const nav = useNavigate();
  useEffect(()=>{
    verifyUser(nav);
  })
  return (
    <>
        <div id='BLScr'>
            <div id='BLImage'>
                <img src="https://cdn.pixabay.com/photo/2021/06/27/12/40/e-wallet-6368676_1280.png" alt="Error Loading Image" />
            </div>
            <div id='BLBalance'>
                <p>Your Balance is : {props.details.balance}</p>
            </div>
        </div>
    </>
  )
}

export default BalanceLeft
