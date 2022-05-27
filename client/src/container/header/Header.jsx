import React from 'react';
import { motion } from 'framer-motion';
//import { images } from '../../constants';
import { AppWrap } from '../../wrapper/index'
//import scaleVariants from './scaleVariants'
import './Header.scss';


const Header = () => {
  return (
    <div id="Home" className='app__header app__flex'>
      <motion.div 
        whileInView = {{ y: [-100, 0], opacity: [0, 1]}}
        transition = {{ duration: 0.8 }}
        className = 'app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
              <span>Hello, I'm <span className='header__name'> Jason Pallone</span></span>
            </div>
          <div className='tag-cmp app__flex'>
          <p class="line-1 anim-typewriter title-text">Software Engineer</p>

          </div>
        </div>
      </motion.div>
    
      {/* <motion.div
        whileInView = {{ opacity: [0, 1] }}
        transition = {{ duration: 0.5, delayChildren: 0.5 }}
        className = 'app__header-img'
      >
        <img src = {images.christopher_gower_unsplash} alt = "profile image" />
        <motion.img
          whileInView = {{ scale: [0, 1] }}
          transition = {{ duration: 1 , ease: 'easeInOut'}}
          src = {images.circle}
          alt = "profile_cirle"
          className = "overlay_circle"
        /> 
      </motion.div> */}

      {/* <div className = 'app__header-circles'>
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
      </div> */}
    </div>
  );
};

 export default AppWrap(Header, 'home');