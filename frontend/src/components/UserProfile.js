import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { verifyUser } from './HelperFunc'


function UserProfile(props) {
    const nav = useNavigate();
    useEffect(()=>{
      verifyUser(nav);
    })
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
                    <p><b>Name : </b>{props.details.name} </p>
                    <p><b>Address : </b>{props.details.address} </p>
                    <p><b>Phone No. : </b>{props.details.phoneNo} </p>
                    <p><b>Date of Birth : </b>{props.details.dob} </p>
                </div>
                <div>
                    <p><b>Email : </b>{props.details.email} </p>
                    <p><b>Gender : </b>{props.details.gender} </p>
                    <p><b>Account No. : </b>{props.details.accountNo} </p>
                    <p><b>Username : </b>{props.details.userName} </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserProfile
