const express = require('express');
const db = require('../database');

const router = express();

// list all plants
router.get('/plants', (req, res) => {
  db.all('SELECT * FROM plants', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server Error');
    } else {
      res.send(rows);
    }
  });
});

// show details about one specific plant
router.get('/plants/:id', (req, res) => {
  db.get('SELECT * FROM plants WHERE ID = ?', req.params.id, (err, row) => {
    if(err) {
      console.log(err);
      res.status(500).send('Server Error');
    } else {
      res.send(row);
    }
  });
});

// add a new plant
router.post('/plants', (req, res) => {
  const { name, description, image_url, species, age, last_watered, watering_frequency } = req.body;
  db.run('INSERT INTO plants (name, description, image_url, species, age, last_watered, watering_frequency) VALUES (?, ?, ?, ?, ?, ?, ?)', [name, description, image_url, species, age, last_watered, watering_frequency], (err) => {
    if(err) {
      console.log(err);
      res.status(500).send('Error inserting plant');
    } else {
      res.send(`Plant '${name}' added to database`);
    }
  });
});


// update a plant
router.put('/plants/:id', (req, res) => {
  const { name, description, image_url, species, age, last_watered, watering_frequency } = req.body;
  db.run('UPDATE plants SET name = ?, description = ?, image_url = ?, species = ?, age = ?, last_watered = ?, watering_frequency = ? WHERE id = ?', 
         [name, description, image_url, species, age, last_watered, watering_frequency, req.params.id], 
         (err) => {
           if(err) {
             console.log(err);
             res.status(500).send('Error updating plant');
           } else {
             res.send(`Plant with id ${req.params.id} was updated successfully`);
           }
         })
});

// delete a plant
router.delete('/plants/:id', (req, res) => {
  db.run('DELETE FROM plants WHERE id = ?', req.params.id, (err) => {
    if(err) {
      console.log(err);
      res.status(500).send('Error deleting plant');
    } else {
      res.send(`plant with id ${req.params.id} has been deleted successfully`);
    }
  })
});

module.exports = router;