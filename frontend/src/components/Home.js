import React from 'react'
import { Link } from "react-router-dom";
import Header from './Header'
import Footer from './Footer';
import '../App.css'

function Home() {
  return (
    <div className='Home'>
        <div className='Home-header'>
            <h1>FloraFriend</h1>
        </div>
        <p>Plant care made easy with FloraFriend</p>
        <Link to="/plants">
            <button className="Dashboard-new-btn Home-btn">See All Plants</button>
        </Link>
    </div>
  )
}

export default Home