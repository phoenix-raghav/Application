import React, { useEffect } from 'react'
import Navbar from './Navbar'
import MidSection from './MidSection'
import Operations from './Operations'
import News from './News'
import SocialMediaTags from './SocialMediaTags'
import { useNavigate } from 'react-router-dom'

function UserDashboard() {

  const nav = useNavigate();
  
  return (
    <>
        <div id='userDbScreen'>
            <header>
                <Navbar/>
                <MidSection/>
                <Operations/>
                <News/>
                <SocialMediaTags/>
            </header>
        </div>
    </>
  )
}

export default UserDashboard
