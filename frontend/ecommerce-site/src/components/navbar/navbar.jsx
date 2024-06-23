import React from 'react'
import './navbar.css'
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';

const navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Shopper</p>
      </div>
      <ul className="nav-menu">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

export default navbar
