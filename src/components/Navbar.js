import React from 'react'
import logo from '../picture/logo.webp';

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="Logo Air BNB" className='nav--logo' />
    </nav>
  )
}

export default Navbar