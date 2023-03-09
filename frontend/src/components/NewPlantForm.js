import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function NewPlantForm() {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
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
      });
  
      console.log(response.data);
      navigate('/');
      
    } catch (err) {
      console.log(err);
      alert('Failed to create plant');
    }
  }

  return (
    <div className='NewPlantForm'>
      <h1>Add a new plant</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />

        <label>Description:</label>
        <input type="text" value={description} onChange={handleDescriptionChange} />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default NewPlantForm;