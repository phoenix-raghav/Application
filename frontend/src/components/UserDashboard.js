import React, { useEffect } from 'react'
import Navbar from './Navbar'
import MidSection from './MidSection'
import Operations from './Operations'
import News from './News'
import SocialMediaTags from './SocialMediaTags'
import { useNavigate } from 'react-router-dom'
import { verifyUser } from './HelperFunc'

function UserDashboard(props) {
  const nav = useNavigate();
  useEffect(()=>{
    verifyUser(nav);
  })
  return (
    <>
        <div id='userDbScreen'>
            <header>
                <Navbar mode={props.mode} setMode={props.setMode} navMode={props.navMode}/>
                <MidSection/>
                <Operations mode={props.mode}/>
                <News/>
                <SocialMediaTags/>
            </header>
        </div>
    </>
  )
}

export default UserDashboard
