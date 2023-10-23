import React, { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUser } from './HelperFunc'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/actionCreators';

function UserProfile() {

    const nav = useNavigate();
    const user = useSelector(state=>state.userDetails)
    const dispatch = useDispatch();
    const x = bindActionCreators(actionCreators,dispatch);

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
            document.getElementById('UPImg').src = url;
        }
        
    })
    const displayText = useCallback((x)=>{
        document.getElementById('UPBtn').style.display=x;
    })

    useEffect(()=>{
        x.setUserDetails(nav);
    },[])

  return (
    <>
        <div id='userProfScr'>
            <div id="UPLeft">
                <div id="UPDetails">
                    <div>
                        <p><span><b>Name : </b></span>{user?.name} </p>
                        <p><span><b>Address : </b></span>{user?.address} </p>
                        <p><span><b>Phone No. : </b></span>{user?.phoneNo} </p>
                        <p><span><b>Date of Birth : </b></span>{user?.dob} </p>
                        <p><span><b>Email : </b></span>{user?.email} </p>
                        <p><span><b>Gender : </b></span>{user?.gender} </p>
                        <p><span><b>Account No. : </b></span>{user?.accountNo} </p>
                        <p><span><b>Username : </b></span>{user?.userName} </p>
                    </div>
                </div>
            </div>

            <div id="UPRight">
                <div id='UPImage'>
                    <img id='UPImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt1G2ye1gTauHDy5vh2qNCNyWvAKO_KpcYFgZ17--uBC1CjYuAoqYeC9rIVEQme_p6pjY&usqp=CAU" alt="Error Loading Image" onMouseOver={()=>{displayText('block')}} onMouseOut={()=>{displayText('none')}} onClick={uploadImage}/>
                    <div>
                        <p id='UPBtn'>Click to change</p>
                        <input type="file" name="image" id="imageInput" accept='image/*'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserProfile
