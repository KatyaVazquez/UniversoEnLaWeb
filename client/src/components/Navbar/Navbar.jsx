import React from 'react'
import {NavLink as Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = ({showed}) => {
  const navBarClassName = showed ? 'active' : '';

  return (
    <nav className="nav">
      <ul className={navBarClassName}>
        <Link to="/planetas" className="only-mobile menu-heading" activeclassname="active"><h2>Planets</h2> </Link>
        <li>
          <Link to="/AstronomyPicture" className="nav-a" activeclassname="active">Picture of the day</Link>
        </li>
        <li>
          <Link to="/News" className="nav-a" activeclassname="active">News</Link>
        </li>
        <li>
          <Link to="/tierra" className="nav-a" activeclassname="active">Earth</Link>
        </li>
        <li>
          <Link to="/mercurio" className="nav-a" activeclassname="active">Mercury</Link>
        </li>
        <li>
          <Link to="/venus" className="nav-a" activeclassname="active">Venus</Link>
        </li>
        <li>
          <Link to="/marte" className="nav-a" activeclassname="active">Mars</Link>
        </li>
        <li>
          <Link to="/jupiter" className="nav-a" activeclassname="active">Jupiter</Link>
        </li>
        <li>
          <Link to="/saturno" className="nav-a" activeclassname="active">Saturn</Link>
        </li>
        <li>
          <Link to="/urano" className="nav-a" activeclassname="active">Uranus</Link>
        </li>
        <li>
          <Link to="/neptuno" className="nav-a" activeclassname="active">Neptune</Link>
        </li>
        <li>
          <Link to="/AstroResources" className="nav-a" activeclassname="active">More Info</Link>
        </li>
        <li>
          <Link to="/feedback" className="nav-a" activeclassname="active">Feedback</Link>
        </li>
        <li className="only-desktop">
          <Link to="/planetas" className={"nav-a"} activeclassname="active">All planets</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;