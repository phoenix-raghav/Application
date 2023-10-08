import React from 'react'

function Operations() {
  return (
    <>
    <div id='operations'>
        <div id="miniStatement" className='operBox'>
            <img src={process.env.PUBLIC_URL + './MiniStatement.png'} alt="Error Loading Image" />
            <h1>Mini Statement</h1>
        </div>
        <div id="checkBln" className='operBox'>
            <img src={process.env.PUBLIC_URL + './Balance.jpeg'} alt="Error Loading Image" />
            <h1>Balance</h1>
        </div>
        <div id="moneyTrsfr" className='operBox'>
            <img src={process.env.PUBLIC_URL + './Transfer.jpeg'} alt="Error Loading Image" />
            <h1>Transfer Money</h1>
        </div>
    </div>
    </>
  )
}

export default Operations
