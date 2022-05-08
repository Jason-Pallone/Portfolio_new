import { images } from '../../constants';

const scaleVariants = [
    { 
      image: images.javascript,
      name: 'JavaScript',
      whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
       duration: .4,
       ease: 'easeInOut'
      }
    }
  },
  {
    image: images.html,
    name:'HTML',
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
       duration: .6,
       ease: 'easeInOut'
      },
    },
  },
  {
      image: images.css,
      name: 'CSS',
      whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
         duration: .8,
         ease: 'easeInOut'
        }
      }
    },
  {
      image: images.react,
      name: 'React',
      whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
         duration: 1,
         ease: 'easeInOut'
        }
      }
    },
  {
      image: images.node,
      name: 'Node.js',
      whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
         duration: 1.2,
         ease: 'easeInOut'
        }
      }
    },
  {
      image: images.sass,
      name: 'Sass',
      whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
         duration: 1.4,
         ease: 'easeInOut'
        }
      }
    }
  ];

  export default scaleVariants