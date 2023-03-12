import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import axios from 'axios';
import Header from './Header'
import Card from './Card';
import '../App.css'

function Dashboard() {

  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/plants/')
      .then(response => setPlants(response.data))
      .catch(err => console.log(err));

  }, []);

  return (
    <div className='Dashboard'>
      <div className='Container'>
        <Header />
          <div className='Dashboard-content'>
            {plants && plants.length > 0 ? (
              plants.map((plant) => (
                <Card 
                  plant={plant}
                  key={plant.id}
                />
              ))
            ) : (
              <p>No plants found</p>
            )}
          </div>
          <div className='Dashboard-button'>
            <Link to="/new-plant">
              <button className="Dashboard-new-btn Dashboard-btn">New Plant <AiOutlinePlus /></button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Dashboard