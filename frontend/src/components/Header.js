import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'

function Header() {
  return (
    <div className='Header'>
        <h1>FloraFriend</h1>
        <div className='Header-buttons'>
          <Link to="/">
              <button className="Dashboard-new-btn">Home</button>
          </Link>
          <Link to="/plants">
              <button className="Dashboard-new-btn">All Plants</button>
          </Link>
        </div>
    </div>
  )
}

export default Header