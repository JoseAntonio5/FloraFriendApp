import React from 'react'
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import axios from 'axios';
import Header from './Header'
import Card from './Card';
import '../App.css'

function Dashboard() {

  const [plants, setPlants] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    axios.get('http://localhost:5000/api/plants/')
      .then((response) => {
        selectedCategory === "All"
          ? setPlants(response.data)
          : setPlants(response.data.filter((p) => p.category === selectedCategory));
      })
      .catch(err => console.log(err));
  }, [selectedCategory]);

  const handleSelectedCategory = (e) => {
    setSelectedCategory(e.target.value);
  }

  return (
    <AnimatePresence>
      <motion.div 
        className='Dashboard'

        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        <div className='Container'>
          <Header />
            <div className='Dashboard-filter'>
              <select id="category" name="category" onChange={handleSelectedCategory}>
                <option value="All">All</option>
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
            </div>
            <motion.div 
              className='Dashboard-content'

              initial={{scale: 0}}
              animate={{scale: 1}}
            >
            {plants && plants.length > 0 ? (
                plants.map((plant) => <Card plant={plant} key={plant.id} />)
              ) : (
                <p>No plants found</p>
              )}
            </motion.div>
            <div className='Dashboard-button'>
              <Link to="/new-plant">
                <button className="Dashboard-new-btn Dashboard-btn">New Plant <AiOutlinePlus /></button>
              </Link>
            </div>
          </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Dashboard