import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'

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
      navigate('/plants');
      
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
      <Header />
      <h1>Add a new plant</h1>

      <div className='NewPlantForm-form'>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />

          <label>Description:</label>
          <textarea value={description} onChange={handleDescriptionChange}></textarea>

          <button className="Card-btn">Submit</button>
        </form>
      </div>
      <button className="Card-btn" onClick={goBack}>Back</button>	
    </div>
  )
}

export default NewPlantForm;