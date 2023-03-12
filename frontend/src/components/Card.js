import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";
import '../App.css'

function Card(props) {

    const { id, name, description, image_url, species } = props.plant;

    const shortenedDescription = description.slice(0, 100) + '...';

    return (
        <div className='Card'>
            <img src={image_url} alt={name} />
            <h3>{name}</h3>
            <p><i>{species}</i></p>
            <p className='Card-description'>{shortenedDescription}</p>

            <Link to={`/plants/${id}`} state={{ plantID: id }}>
                <button className="Card-btn">More <AiOutlinePlus /></button>
            </Link>
        </div>
    )
}

export default Card