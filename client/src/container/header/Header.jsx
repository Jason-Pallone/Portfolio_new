import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper/index'
import scaleVariants from './scaleVariants'
import './Header.scss';


const Header = () => {
  return (
    <div id="Home" className='app__header app__flex'>
      <motion.div 
        whileInView = {{ x: [-100, 0], opacity: [0, 1]}}
        transition = {{ duration: 0.5 }}
        className = 'app__header-info'
      >
        <div className = 'app__header-badge'>
          <div className = 'badge-cmp app__flex'>
            <span>👋</span>
            <div style = {{marginLeft: 20}}>
              <p className = 'p-text'>Hello, I am</p>
              <h1 className = 'head-text'>Jason</h1>
            </div>
          </div>
          <div className= 'tag-cmp app__flex'>
            <p className = 'p-text'>Web Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView = {{ opacity: [0, 1] }}
        transition = {{ duration: 0.5, delayChildren: 0.5 }}
        className = 'app__header-img'
      >
        <img src = {images.profile} alt = "profile image" />
        <motion.img
          whileInView = {{ scale: [0, 1] }}
          transition = {{ duration: 1 , ease: 'easeInOut'}}
          src = {images.circle}
          alt = "profile_cirle"
          className = "overlay_circle"
        /> 
      </motion.div>

      <div className = 'app__header-circles'>
        {scaleVariants.map((image)=> (
          <motion.div 
           className='circle-cmp app__flex'
           key={image.name}
           variant={scaleVariants}
           whileInView = {image.whileInView}
          >
            <img src = {image.image} alt = "circle" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

 export default AppWrap(Header, 'home');