import React from 'react'
import { Link } from "react-router-dom";
import { motion, AnimatePresence  } from 'framer-motion';
import Footer from './Footer';
import '../App.css'

function Home() {
  return (
    <AnimatePresence>
      <motion.div 
        className='Home'
        
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
          <div className='Home-header'>
              <h1>FloraFriend</h1>
          </div>
          <p>Plant care made easy with FloraFriend</p>
          <Link to="/plants">
              <button className="Dashboard-new-btn Home-btn">See All Plants</button>
          </Link>
          <Footer />
      </motion.div>
    </AnimatePresence>
  )
}

export default Home