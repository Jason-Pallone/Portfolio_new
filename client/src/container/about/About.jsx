import React, {useState, useEffect} from 'react'
import { motion, useForceUpdate } from 'framer-motion'
import { images } from '../../constants'
import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './About.scss'

// const abouts = [
//   {
//     title: 'Web development',
//     description: 'I am a good developer',
//     imgUrl: images.about01
//   },
//   {
//     title: 'Web design',
//     description: 'I am a good deisnger',
//     imgUrl: images.about02
//   },
//   {
//     title: 'Full stack',
//     description: 'I do full stack development',
//     imgUrl: images.about03
//   },
//   {
//     title: 'Database',
//     description: 'I manipulate data in databases',
//     imgUrl: images.about04
//   }
// ]

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => setAbouts(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <motion.div 
        whileInView = {{ x: [-200, 0], opacity: [0, 1]}}
        transition={{ duration: 0.5, type: 'tween'}}
      >
        <h2 className="head-text">I know that <span>Good Development</span><br />Means <span>Good Business</span></h2>
      </motion.div>

      <div id="About" className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div 
            key={about.title + index}
            whileInView = {{ x: [-200, 0], opacity: [0, 1]}}
            whileHover={{scale: 1.1}}
            transition={{ duration: 0.5, type: 'tween'}}
            className="app__profile-item"
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <h2 className='bold-text' style={{ marginTop: 10 }}>{about.description}</h2>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(About, 'about')