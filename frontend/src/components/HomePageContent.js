import React from 'react'
import { Link } from 'react-router-dom';

function HomePageContent(props) {
  props.setHpHeading("Welcome to Robber's Bank");
  return (
    <div id="HpLeftContent">
      <h2>Want to Link an Existing account</h2>
      <Link to="/signup"><button className='btn'>Already have an account</button></Link>
      <h2>Does not have an account, Don't worry</h2>
      <Link to="/create"><button className='btn'>Create a new account</button></Link>
      <Link to="/login" id='HpLogin'>Login</Link>
    </div>
  );
}

export default HomePageContent
