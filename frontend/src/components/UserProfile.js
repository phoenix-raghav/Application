import React, { useEffect } from 'react'

function UserProfile() {
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
                    <p><b>Name :</b> </p>
                    <p><b>Address :</b> </p>
                    <p><b>Phone No. :</b> </p>
                    <p><b>Date of Birth :</b> </p>
                </div>
                <div>
                    <p><b>Email :</b> </p>
                    <p><b>Gender :</b> </p>
                    <p><b>Account No. :</b> </p>
                    <p><b>Username :</b> </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserProfile
