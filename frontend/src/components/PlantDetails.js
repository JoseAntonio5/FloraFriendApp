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

                <div className='PlantDetails-content'>
                    <div className='PlantDetails-left'>
                        <img src={currentPlant.image_url} alt={currentPlant.name} />
                    </div>
                    <div className='PlantDetails-right'>
                        <h1>{currentPlant.name}</h1>
                        <p className='PlantDetails-species'>{currentPlant.species}</p>
                        <h3 className='PlantDetails-description'>{currentPlant.description}</h3>
                        <p className='PlantDetails-age'><b>Plant age:</b> {currentPlant.age} year(s)</p>
                        <h3>Last time plant was watered: {currentPlant.last_watered}</h3>
                    </div>
                </div>

                <Link to={`/plants/${id}/update`} state={{ plant: currentPlant }}>
                    <button className="Card-btn Update-btn">Update <AiOutlineReload /></button>
                </Link>
                <button className="Card-btn Delete-btn" onClick={handleDelete}>Delete <AiFillDelete /></button><br />

                <button className="Card-btn Details-back-btn" onClick={goBack}><AiOutlineArrowLeft /> Back</button>
        
            </div>
        </div>
    )

}

export default PlantDetails