import React, { useRef, useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  //const [active, setActive] = useState('')

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-name'>
        Jason
      </div>
      <ul className='app__navbar-links'>
        {["Home", "About", "Contact", "Work", "Skills", "Testimonials"].map((items) => (
          <li key={`link-${items}`} className='app__flex p-text'>
            <div />
            <a 
              //style={active === items ? { color: '#313BAC' } : {}} 
              //onClick = { () => setActive(items) }
              href={`#${items}`}>{`${items}`}</a>
          </li> 
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)}/>

        {toggle && (
            <motion.div 
              whileInView = {{ x: [300, 0]}}
              transition = {{duration: 0.85, ease: 'easeOut'}}
              >
                <HiX onClick={() => setToggle(false)} />
                {["Home", "About", "Contact", "Work", "Skills", "Testimonials"].map((items) => (
                <ul>
                  <li key={items} className='app__flex p-text'>
                    <a href={`#${items}`} onClick={() => setToggle(false)}>{`${items}`}</a>
                  </li>
                </ul>
                ))}
            </motion.div>
          )}
      </div>
    </nav>  
  );
};

export default Navbar