import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

function Card(props) {

    const { id, name, description } = props.plant;

    return (
        <div className='Card'>
            <img src='https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt='plant' />
            <h3>{name}</h3>
            <p>{description}</p>
            <Link
                to={{
                    pathname: `/plants/${id}`,
                    state: { id }
                }}
            >
            <button id="Card-btn">See more</button>
            </Link>
        </div>
    )
}

export default Card