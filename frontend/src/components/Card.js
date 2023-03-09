import React from 'react'
import '../App.css'

function Card(props) {
  return (
    <div className='Card'>
        <img src='https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt='plant' />
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <button id="Card-btn">See more</button>
    </div>
  )
}

export default Card