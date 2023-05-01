import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header'

function About() {
  return (
    <AnimatePresence>
        <motion.div 
            className='About'
            
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div className='Container'>
                <Header />

                <div className='About-content'>
                    <h1>About Us</h1>
                        <div className='About-content-paragraph'>
                            <p>Welcome to FloraFriend! We are a web application that helps you keep track of your plants. You can add your plants, edit, and delete plants, as well as see all of your plants at once.</p>
                        </div>
                        <div className='About-content-paragraph'>
                            <p>With our user-friendly interface, you can easily track your plants progress, including when they were last watered and when they're due for their next watering.</p>
                        </div>
                        <div className='About-content-paragraph'>
                            <p>Join FloraFriend today and start enjoying all the benefits of having happy, healthy plants in your life!</p>
                        </div>
                    <p><small>v1.0</small></p>
                </div>
            </div>
        </motion.div>
    </AnimatePresence>
  )
}

export default About