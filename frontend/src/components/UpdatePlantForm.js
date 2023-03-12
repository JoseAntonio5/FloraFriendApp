import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";
import Header from './Header'

function UpdatePlantForm(props) {

    const navigate = useNavigate();
    const location = useLocation();
    const plantToUpdate = location.state?.plant;
    const [updatedName, setUpdatedName] = useState(plantToUpdate.name);
    const [updatedDescription, setUpdatedDescription] = useState(plantToUpdate.description);
  
    const handleNameChange = (e) => {
        setUpdatedName(e.target.value);
    }
  
    const handleDescriptionChange = (e) => {
        setUpdatedDescription(e.target.value);
    }

    const goBack = () => {
        navigate(-1);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`http://localhost:5000/api/plants/${plantToUpdate.id}`, {
                name: updatedName,
                description: updatedDescription,
            });
        
            console.log(response.data);
            navigate(`/plants/`);
            
          } catch (err) {
            console.log(err);
            alert('Failed to update plant');
          }
    }

    return (
        <div className='NewPlantForm'>
            <div className='Container'>
                <Header />
                <div className='NewPlantForm-content'>
                    <h1>Update plant info</h1>

                    <div className='NewPlantForm-form'>
                    <form onSubmit={handleSubmit}>
                        <label>Name:</label>
                        <input type="text" value={updatedName} onChange={handleNameChange} />

                        <label>Description:</label>
                        <textarea value={updatedDescription} onChange={handleDescriptionChange}></textarea>

                        <button className="Dashboard-new-btn">Submit</button>
                    </form>
                    </div>
                    <button className="Dashboard-new-btn" onClick={goBack}><AiOutlineArrowLeft /> Back</button>
                </div>
            </div>
        </div>
    )
}

export default UpdatePlantForm