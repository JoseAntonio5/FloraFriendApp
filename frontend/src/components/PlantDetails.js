import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from './Header';

function PlantDetails() {

    const navigate = useNavigate();
    const location = useLocation();
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

    const handleDelete = () => {

        const confirmDelete = window.confirm("Are you sure you want to delete this plant?");

        if (confirmDelete) {
            axios
            .delete(`http://localhost:5000/api/plants/${id}`)
            .then(() => {
                // Redirect to the dashboard after deleting the plant
                navigate('/plants');
            })
            .catch(err => console.log(err));
        }
    };

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

            <Link to={`/plants/${id}/update`} state={{ plant: currentPlant }}>
                <button className="Card-btn">Update</button>
            </Link>
            <button className="Card-btn" onClick={handleDelete}>Delete</button><br />

            <button className="Card-btn" onClick={goBack}>Back</button>	
        
        </div>
    )

}

export default PlantDetails