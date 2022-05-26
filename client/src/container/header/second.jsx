import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper/index'
import scaleVariants from './scaleVariants'
import './Header.scss';


const Second = () => {
  return (
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
  );
};

 export default Second