import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'

function Header() {
  return (
    <div className='Header'>
        <Link id="Header-text-link" to="/">
          <h1>FloraFriend</h1>
        </Link>
        <div className='Header-buttons'>
          <Link to="/">
              <button className="Dashboard-new-btn">Home</button>
          </Link>
          <Link to="/plants">
              <button className="Dashboard-new-btn">All Plants</button>
          </Link>
          <Link to="/about">
              <button className="Dashboard-new-btn">About</button>
          </Link>
        </div>
    </div>
  )
}

export default Header