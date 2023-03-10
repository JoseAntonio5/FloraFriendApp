import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function PlantDetails(props) {

    const location = useLocation();
    const { id } = location.state;
    const [plant, setPlant] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:5000/api/plants/${id}`)
        .then(response => setPlant(response.data))
        .catch(err => console.log(err));
  
    }, []);

    console.log(plant)

    return (
        <div className='PlantDetails'>
            <h1>TESTE</h1>
        </div>
    )
}

export default PlantDetails