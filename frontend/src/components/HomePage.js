import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function HomePage(props) {

    const heading = useSelector(state=> state.heading);
    const {mode} = useSelector(state=> state.mode);
    useEffect (() =>{
        document.getElementById('HpInnerScr').style.backgroundColor = mode == 'light' ? 'white' : '#393737';
        document.getElementById('HpScr').style.backgroundColor = mode == 'light' ? 'rgb(234, 201, 234)' : '#25292d';
    },[mode]);
    
  return (
    <>
        <div id="HpScr" className='noSpacing'>
            <div id="HpInnerScr">
                <div id="HpHeading">
                    <h1>{heading}</h1>
                </div>
                <div id="HpSections">
                    <div id="HpLeftSec">
                        {props.ele}
                    </div>
                    <div id="HpRightSec">
                        <img src={process.env.PUBLIC_URL + '/HomePage_Logo.png'} alt="Error Loading Image" />
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomePage
