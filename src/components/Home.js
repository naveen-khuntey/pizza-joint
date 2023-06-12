import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Home = () => {
  const buttonVariants = {
    hover : {
      // scale:[1,1.1,1,1.1,1,1.1,1],//key frames
      scale : 1.1,
      textShadow : "0 0 8px rgba(255,255,255)",
      boxShadow : "0 0 8px rgba(255,255,255)",
      transition : {
        duration : 0.3,
        yoyo : Infinity //infinite keyframe
      }
    }
  }
  return (
    <motion.div className="home container"
      initial={{opacity : 0}}
      animate={{opacity : 1}}
      transition={{delay:1, duration:2}}
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;