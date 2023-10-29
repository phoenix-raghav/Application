import React, { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { updateDetails } from './HelperFunc'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/actionCreators';

function UserProfile() {

    const nav = useNavigate();
    const user = useSelector(state=>state.userDetails)
    const dispatch = useDispatch();
    const x = bindActionCreators(actionCreators,dispatch);
    const {mode} = useSelector(state=> state.mode);

    const uploadImage = useCallback(()=>{
        const img = document.getElementById('imageInput')
        img.click();
        img.addEventListener('change',getImage);
    })

    const getImage = useCallback(()=>{
        const img = document.getElementById('imageInput')
        if(img.files.length)
        {
            const file = img.files[0];
            const url = URL.createObjectURL(file);
            document.getElementById('UPImage').style.backgroundImage = `url(${url})`;
            updateDetails('/updateDetails',url);    
        }
    })
    const displayText = useCallback((x)=>{
        document.getElementById('UPBtn').style.display=x;
    })
    
    
    useEffect(()=>{
        x.setUserDetails(nav);
        document.getElementById('UPBtn').style.display='none';
    },[])   
    useEffect(()=>{
        document.getElementById('UPImage').style.backgroundImage = `url(${user?.imageURL})`;
    },[user])
    useEffect(()=>{
        document.getElementById('UPDetails').style.backgroundColor = mode == 'light' ? 'azure' : '#393737';
    },[mode])

  return (
    <>
        <div id='userProfScr'>
            <div id="UPLeft">
                <div id="UPDetails">
                        <div><span><b>Name </b></span><p>{user?.name} </p></div>
                        <div><span><b>Address</b></span><p>{user?.address} </p></div>
                        <div>
                            <span><b>Phone No.</b></span><p>{user?.phoneNo} </p>
                        </div>
                        <div>
                            <span><b>Date of Birth</b></span><p>{user?.dob} </p>
                        </div>
                        <div>
                            <span><b>Email</b></span><p>{user?.email} </p>
                        </div>
                        <div>
                            <span><b>Gender</b></span><p>{user?.gender} </p>
                        </div>
                        <div>
                            <span><b>Account No.</b></span><p>{user?.accountNo} </p>
                        </div>
                        <div>
                            <span><b>Username</b></span><p>{user?.userName} </p>
                        </div>
                </div>
            </div>

            <div id="UPRight">
                <div id='UPImage' onClick={uploadImage} onMouseOver={()=>{displayText('block')}} onMouseOut={()=>{displayText('none')}}>
                        <p id='UPBtn'>Click to change</p>
                    <input type="file" name="image" id="imageInput" accept='image/*'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserProfile
