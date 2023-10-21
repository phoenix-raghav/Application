import React, { useEffect } from 'react'
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

    useEffect(()=>{
        x.setUserDetails(nav);
    },[])

  return (
    <>
        <div id='userProfScr'>
            <h1>Robber's Bank Welcomes you</h1>
            <div id='UPImage'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt1G2ye1gTauHDy5vh2qNCNyWvAKO_KpcYFgZ17--uBC1CjYuAoqYeC9rIVEQme_p6pjY&usqp=CAU" alt="Error Loading Image" />
                {/* <p id='insertImage'>Click to change</p> */}
            </div>
            <div id="UPDetails">
                <div>
                    <p><b>Name : </b>{user?.name} </p>
                    <p><b>Address : </b>{user?.address} </p>
                    <p><b>Phone No. : </b>{user?.phoneNo} </p>
                    <p><b>Date of Birth : </b>{user?.dob} </p>
                </div>
                <div>
                    <p><b>Email : </b>{user?.email} </p>
                    <p><b>Gender : </b>{user?.gender} </p>
                    <p><b>Account No. : </b>{user?.accountNo} </p>
                    <p><b>Username : </b>{user?.userName} </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserProfile
