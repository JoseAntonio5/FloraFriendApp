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
    const [updatedImageUrl, setUpdatedImageUrl] = useState(plantToUpdate.image_url);
    const [updatedCategory, setUpdatedCategory] = useState(plantToUpdate.category);
    const [updatedSpecies, setUpdatedSpecies] = useState(plantToUpdate.species);
    const [updatedAge, setUpdatedAge] = useState(plantToUpdate.age);
    const [updatedLastWatered, setUpdatedLastWatered] = useState(plantToUpdate.last_watered);
    const [updatedWateringFrequency, setUpdatedWateringFrequency] = useState(plantToUpdate.watering_frequency);
  
    const handleNameChange = (e) => {
        setUpdatedName(e.target.value);
    }
  
    const handleDescriptionChange = (e) => {
        setUpdatedDescription(e.target.value);
    }

    const handleImageUrlChange = (e) => {
        setUpdatedImageUrl(e.target.value);
    }

    const handleCategoryChange = (e) => {
      setUpdatedCategory(e.target.value);
    }
    
    const handleSpeciesChange = (e) => {
      setUpdatedSpecies(e.target.value);
    }
    
    const handleAgeChange = (e) => {
      setUpdatedAge(e.target.value);
    }
    
    const handleLastWateredChange = (e) => {
      setUpdatedLastWatered(e.target.value);
    }
    
    const handleWateringFrequencyChange = (e) => {
      setUpdatedWateringFrequency(e.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`http://localhost:5000/api/plants/${plantToUpdate.id}`, {
                name: updatedName,
                description: updatedDescription,
                image_url: updatedImageUrl,
                category: updatedCategory,
                species: updatedSpecies,
                age: updatedAge,
                last_watered: updatedLastWatered,
                watering_frequency: updatedWateringFrequency,
            });
        
            console.log(response.data);
            navigate(`/plants/`);
            
          } catch (err) {
            console.log(err);
            alert('Failed to update plant');
          }
    }

    const goBack = () => {
        navigate(-1);
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

                        <label>Image URL:</label>
                        <input type="text" value={updatedImageUrl} onChange={handleImageUrlChange} />

                        <label for="category">Category:</label>
                        <select id="category" name="category" value={updatedCategory} onChange={handleCategoryChange}>
                          <option value="" disabled>Select a category</option>
                          <option value="Flowering plants">Flowering plants</option>
                          <option value="Succulents and cacti">Succulents and cacti</option>
                          <option value="Edible plants">Edible plants</option>
                          <option value="Houseplants">Houseplants</option>
                          <option value="Trees">Trees</option>
                          <option value="Shrubs">Shrubs</option>
                          <option value="Vines">Vines</option>
                          <option value="Herbs">Herbs</option>
                          <option value="Ferns">Ferns</option>
                        </select>

                        <label>Species:</label>
                        <input type="text" value={updatedSpecies} onChange={handleSpeciesChange} />

                        <label>Age:</label>
                        <input type="number" value={updatedAge} onChange={handleAgeChange} />

                        <label>Last Watered:</label>
                        <input type="date" value={updatedLastWatered} onChange={handleLastWateredChange} />

                        <label>Watering Frequency:</label>
                        <input type="number" value={updatedWateringFrequency} onChange={handleWateringFrequencyChange} />

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