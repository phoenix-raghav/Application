import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionCreators } from '../state/actionCreators';
import { bindActionCreators } from 'redux';

function BalanceLeft() {

  const nav = useNavigate();
  const user = useSelector(state=>state.userDetails);
  const dispatch = useDispatch();
  const x = bindActionCreators(actionCreators,dispatch);

  useEffect(()=>{
      x.setUserDetails(nav);
  },[])

  return (
    <>
        <div id='BLScr'>
            <div id='BLImage'>
                <img src="https://cdn.pixabay.com/photo/2021/06/27/12/40/e-wallet-6368676_1280.png" alt="Error Loading Image" />
            </div>
            <div id='BLBalance'>
                <p>Your Balance is : {user?.balance}</p>
            </div>
        </div>
    </>
  )
}

export default BalanceLeft
