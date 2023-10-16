import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

function Operations() {

  const {mode} = useSelector(state=>state.mode);

  useEffect (() =>{
      document.querySelectorAll('#operations a').forEach(ele=>{
        ele.style.color= mode == 'light' ? 'black' : 'white';
      });
  });

  return (
    <>
    <div id='operations'>
        <div id="miniStatement" className='operBox'>
            <Link to='/user/miniStatement'>
              <img src={process.env.PUBLIC_URL + './MiniStatement.png'} alt="Error Loading Image" />
              <h1>Mini Statement</h1>
            </Link>
        </div>
          <div id="checkBln" className='operBox'>
            <Link to="/user/balance">
                <img src={process.env.PUBLIC_URL + './Balance.jpeg'} alt="Error Loading Image" />
                <h1>Balance</h1>
            </Link>
          </div>
          <div id="moneyTrsfr" className='operBox'>
            <Link to="/user/transfer">
                <img src={process.env.PUBLIC_URL + './Transfer.jpeg'} alt="Error Loading Image" />
                <h1>Transfer Money</h1>
            </Link>
          </div>
    </div>
    </>
  )
}

export default Operations
