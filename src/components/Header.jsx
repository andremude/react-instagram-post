import React from 'react'
import ProfileImg from "../images/profile.jpg"
import DotsImg from "../images/dots.png"

const Header = () => {
  return (
    <div>
      <header className="header-container">
        <img
          src={ProfileImg}
          className="profile-img"
          alt="avatar"
        />
        <div className="profile-name-container">
          <h4 className="profile-name">Andrew Scott</h4>
          <h4 className="profile-title">Camino de Santiago, Spain</h4>
        </div>
        <img
          src={DotsImg}
          className="menu-header"
          alt="dots"
        />
      </header>
    </div>
  )
}

export default Header
