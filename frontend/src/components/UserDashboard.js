import React from 'react'
import Navbar from './Navbar'
import MidSection from './MidSection'
import Operations from './Operations'
import News from './News'
import SocialMediaTags from './SocialMediaTags'

function UserDashboard() {
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
