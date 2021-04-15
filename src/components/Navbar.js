import React from "react"
import '../App.css';
import logo from '../images/nameSmallLogo.png'

const Navbar = ({ sticky }) => (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>

    <div className="navbar--logo-holder">
      {sticky ? <img src={logo} alt="logo" className="navbarLogo" /> : null}
    </div>

    <ul className="navbarLinks">
      <li className="navbar--link-item">Home</li>
    </ul>

  </nav>
)
export default Navbar

