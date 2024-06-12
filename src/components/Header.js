import React from 'react'
import '../styles/Header.css';
const Header = () => {
  return (
    <div className="header">
      <div className="header"> 
      <div className="header-image">
        <img src="icons/skillop.png" className="skillop-header-image"/>
      </div>
      <div className="skillop-header-text">
        Skillop
      </div>
      
      <div className="nav-bar">
        <div className="quiz">Questions</div>
        <div className="response">Responses</div>
        <div className="setting">Settings</div>
      </div> 

      <div className="side-menu">
        <div className="side-menu-btn">
          <img src="icons/hamburgerImage.png" className="hamburger-image"/>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Header
