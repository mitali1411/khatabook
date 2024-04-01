import React from 'react'
import logo from '../assets/react.svg'

const Navbar = ({theme, changeTheme}) => {
  return (
    <nav className={theme ? "navbar bg-light p-3" : "navbar bg-dark p-3 shadow-lg"}>
    <div className="container-fluid">
      <img src={logo} alt="" />
      <span className={theme ? "navbar-brand mb-0 h1 text-dark" : "navbar-brand mb-0 h1 text-light"}>Khatabook</span>
      <i className={theme ? "fa-solid fa-moon text-secondary h5" : "fa-solid fa-sun text-warning h5"} onClick={()=>changeTheme()}></i>
    </div>
    </nav>
  )
}

export default Navbar;