import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from './Header';

function PlantDetails() {

    const navigate = useNavigate();
    const location = useLocation()
    const id = location.state?.plantID;
    const [currentPlant, setCurrentPlant] = useState({})

    useEffect(() => {
        if (id) {
        axios
            .get(`http://localhost:5000/api/plants/${id}`)
            .then(response => setCurrentPlant(response.data))
            .catch(err => console.log(err))
        }
    }, [id])

    const goBack = () => {
        navigate(-1);
    }

    if (!id) {
        return <div>Loading...</div>
    }

    return (
        <div className='PlantDetails'>

            <Header />

            <h1>{currentPlant.name}</h1>
            <p>{currentPlant.description}</p>

            <button className="Card-btn" onClick={goBack}>Back</button>	
        
        </div>
    )

}

export default PlantDetails