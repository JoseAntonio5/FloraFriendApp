import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AiOutlineArrowLeft } from "react-icons/ai";
import Header from './Header'

function NewPlantForm() {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [species, setSpecies] = useState('');
  const [age, setAge] = useState('');
  const [lastWatered, setLastWatered] = useState('');
  const [wateringFrequency, setWateringFrequency] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  }

  const handleSpeciesChange = (e) => {
    setSpecies(e.target.value);
  }

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }

  const handleLastWateredChange = (e) => {
    setLastWatered(e.target.value);
  }

  const handleWateringFrequencyChange = (e) => {
    setWateringFrequency(e.target.value);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(!name) {
      alert('Please enter a name.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/plants', {
        name,
        description,
        image_url: imageUrl,
        species,
        age,
        last_watered: lastWatered,
        watering_frequency: wateringFrequency,
      });
  
      console.log(response.data);
      navigate('/');
      
    } catch (err) {
      console.log(err);
      alert('Failed to create plant');
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
          <h1>Add a new plant</h1>

          <div className='NewPlantForm-form'>
            <form onSubmit={handleSubmit}>

              <label>Name:</label>
              <input type="text" value={name} onChange={handleNameChange} />

              <label>Description:</label>
              <textarea value={description} onChange={handleDescriptionChange}></textarea>

              <label>Image URL:</label>
              <input type="text" value={imageUrl} onChange={handleImageUrlChange} />

              <label>Species:</label>
              <input type="text" value={species} onChange={handleSpeciesChange} />

              <label>Age:</label>
              <input type="number" value={age} onChange={handleAgeChange} />

              <label>Last Watered:</label>
              <input type="date" value={lastWatered} onChange={handleLastWateredChange} />

              <label>Watering Frequency:</label>
              <input type="number" value={wateringFrequency} onChange={handleWateringFrequencyChange} />

              <button className='Dashboard-new-btn'>Submit</button>
            </form>
          </div>
          <button className="Dashboard-new-btn" onClick={goBack}><AiOutlineArrowLeft /> Back</button>
        </div>
      </div>
    </div>
  )
}

export default NewPlantForm;