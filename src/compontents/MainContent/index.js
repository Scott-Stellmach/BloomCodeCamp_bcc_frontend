import './index.css'
import React from 'react'
import login from '../../images/login.jpg'


function MainContent() {

  function moveToLogin() {
    window.location.href = "/login";
  }


  return (
    <div className='main'>
      <div className='sub-main'>
        <div className='mid-main'>
          <div className='iconContainer'>
            <img src= 'your org icon' alt='icon' className='icon'></img>
          </div>
          <h1>Welcome to ULS!</h1>
          <h2>This is an example of a possible host main page.</h2>
          <h3>Contact info: abcdef@your.org</h3>
          <h3>Contact info: 0-000-000-0000</h3>
          <h3>Address: your location</h3>
            <div className='transferToLogin'>
              <div className='imgContainer'>
                <img src={login} alt= 'login' className='login'></img>
              </div>
              <button className='loginButton' onClick={() => moveToLogin()}> Go To Login Page</button>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default MainContent