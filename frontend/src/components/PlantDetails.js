import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AiOutlineArrowLeft, AiFillDelete, AiOutlineReload } from "react-icons/ai";
import Header from './Header';

function PlantDetails() {

    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state?.plantID;
    const [currentPlant, setCurrentPlant] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlant = async () => {
            try {
              const response = await axios.get(`http://localhost:5000/api/plants/${id}`);
              setCurrentPlant(response.data);
              setLoading(false);
            } catch (err) {
              console.log(err);
            }
          };
      
          fetchPlant();
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

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='PlantDetails'>
            <div className='Container'>
                <Header />
                <h1>{currentPlant.name}</h1>
                <img src={currentPlant.image_url} alt={currentPlant.name} style={{width: 500}} />
                <p>{currentPlant.species}</p>
                <h3>{currentPlant.description}</h3>
                <p>Plant age: {currentPlant.age} year(s)</p>
                <h3>Last time plant was watered: {currentPlant.last_watered}</h3>

                <Link to={`/plants/${id}/update`} state={{ plant: currentPlant }}>
                    <button className="Card-btn">Update <AiOutlineReload /></button>
                </Link>
                <button className="Card-btn" onClick={handleDelete}>Delete <AiFillDelete /></button><br />

                <button className="Card-btn" onClick={goBack}><AiOutlineArrowLeft /> Back</button>
        
            </div>
        </div>
    )

}

export default PlantDetails