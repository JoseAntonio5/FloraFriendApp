import React from 'react'
import Header from './Header'

function About() {
  return (
    <div className='About'>
        <div className='Container'>
            <Header />

            <div className='About-content'>
                <h1>About Us</h1>
                <p>
                    FloraFriend is a web application that helps you keep track of your plants. You can add your plants, edit, and delete plants, as well as see all of your plants at once.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About;