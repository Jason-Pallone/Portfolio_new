import React from 'react'
import { images } from '../../constants/index'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navrbar-logo'>
        <img src={images.logo} alt="logo image" />
      </div>
      <ul className='app__navbar-links'>
        {[, "About", "Contact", "Work", "Skills", "Testimonials"].map((items) => (
          <li key={`link-${items}`} className='app__flex p-text'>
            <div />
            <a href={`#${items}`}>{`${items}`}</a>
          </li> 
        ))}
      </ul>
    </nav>  
  )
}

export default Navbar