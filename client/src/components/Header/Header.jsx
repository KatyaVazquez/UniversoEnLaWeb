import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = ({updateMenu, showed}) => {
  

  return (
    <div className="header">
      <Navbar showed={showed}/>
    </div>
  )
}

export default Header