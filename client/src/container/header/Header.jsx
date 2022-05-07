import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInViewFlutter: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
     duration: .2,
     ease: 'easeInOut'
    }
  },
  whileInViewRedux: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
     duration: .5,
     ease: 'easeInOut'
    },
  },
    whileInViewSass: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
       duration: .7,
       ease: 'easeInOut'
      }
    }
}
const Header = () => {
  return (
    <div id="home" className='app__header app__flex'>
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
        <motion.div 
         className='circle-cmp app__flex'
         key="flutterImg"
         variant={scaleVariants}
         whileInView = {scaleVariants.whileInViewFlutter}
        >
          <img src = {images.flutter} alt = "circle" />
        </motion.div>

        <motion.div 
         className='circle-cmp app__flex'
         key="reduxImg"
         variant={scaleVariants}
         whileInView = {scaleVariants.whileInViewRedux}
        >
          <img src = {images.redux} alt = "circle" />
        </motion.div>

        <motion.div 
         className='circle-cmp app__flex'
         key="sassImg"
         variant={scaleVariants}
         whileInView = {scaleVariants.whileInViewSass}
        >
          <img src = {images.sass} alt = "circle" />
        </motion.div>
      </div>
    </div>
  );
};

export default Header