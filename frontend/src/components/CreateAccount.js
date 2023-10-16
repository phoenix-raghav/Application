import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/actionCreators';

function CreateAccount(props) {

    const nav = useNavigate();
    const dispatch = useDispatch();
    const {actionHeading} = bindActionCreators(actionCreators,dispatch); 
    actionHeading("Enter your Details");

    useEffect(()=>{
        props.setDisableBtn(true);
      },[])
      
    const sendData = async() =>{
        try{
            document.querySelector('.invalidDetails').innerHTML='';
            const x = Array.from(document.querySelectorAll('.userDetails input'));
            const url = 'http://127.0.0.1:8080/createAccount';
            const gend = document.getElementsByName('gender')[0].checked ? 'male' : 'female';
            const params = {
                method: "POST",
                headers : {'Content-Type': 'application/json'},
                body: JSON.stringify({name: x[0].value, address: x[1].value, gender: gend, dob: x[4].value, phoneNo: x[5].value, email: x[6].value, balance: x[7].value})
            }
            const rsp = await fetch(url,params);
            const data = await rsp.json();  
            if(rsp.status==400)
                document.querySelector('.invalidDetails').innerHTML=data.msg;
            if(rsp.status==500)
                alert(data.msg);
            if(rsp.status==200)
            {
                alert(data.msg);
                props.setAccNo(data.accountNo);
                nav('/accountNo')
            }
        }
        catch{
            console.log('Internal Server Error');
        }
    }

  return (
    <div id='CreateAccount'>
        <div className="invalidDetails"></div>
        <div className='userDetails'>
            <span>Name : </span>
            <input type="text" placeholder='Enter your name' onChange={()=>{props.disableBtn('userDetails','createAcBtn')}}/>
        </div>
        <div className='userDetails'>
            <span>Address : </span>
            <input type="text" placeholder='Enter your address' onChange={()=>{props.disableBtn('userDetails','createAcBtn')}}/>
        </div>
        <div className='userDetails'>
            <span>Gender : </span>
            <div id='userGenderBox'>Male <input type="radio" name='gender' value='male' className='userGender'/> Female <input type="radio" className='userGender' name='gender' value='female'/></div>
        </div>
        <div className='userDetails'>
            <span>Date of Birth : </span>
            <input type="date" onChange={()=>{props.disableBtn('userDetails','createAcBtn')}}/>
        </div>
        <div className='userDetails'>
            <span>Phone No. : </span>
            <input type="number" placeholder='Enter your phone number' onChange={()=>{props.disableBtn('userDetails','createAcBtn')}}/>
        </div>
        <div className='userDetails'>
            <span>Email : </span>
            <input type="email" placeholder='Enter your email' onChange={()=>{props.disableBtn('userDetails','createAcBtn')}}/>
        </div>
        <div className='userDetails'>
            <span>Amount : </span>
            <input type="number" placeholder='Enter your initial amount' onChange={()=>{props.disableBtn('userDetails','createAcBtn')}}/>
        </div>
        <button onClick={sendData} className='btn' id='createAcBtn' disabled={props.disabledBtn}>Submit</button>
    </div>
  )
}

export default CreateAccount
