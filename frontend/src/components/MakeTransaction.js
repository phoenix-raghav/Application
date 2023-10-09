import React from 'react'

function MakeTransaction() {
  return (
    <>
        <div id='MTScr'>
            <div id='MTLeftSec'>
                <div>
                    <div><span>Account No. </span> : <input type="number" placeholder='Enter account number'/></div>
                    <div><span>Username </span> : <input type="text" placeholder='Enter username'/></div>
                    <div><span>Amount </span> : <input type="number" placeholder='Enter amount'/></div>
                    <div><span>Password </span> : <input type="number" placeholder='Enter password'/></div>
                    <div><button className='btn' id='payBtn'>Pay</button></div>
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
