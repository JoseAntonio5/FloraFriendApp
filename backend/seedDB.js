const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = 'FloraFriend.db';

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  }
  console.log('Connected to the SQLite database.');
});

const plants = [
  { name: 'Rose', description: 'A beautiful flower with a lovely fragrance.' },
  { name: 'Tulip', description: 'A colorful flower with a distinctive shape.' },
  { name: 'Lily', description: 'A delicate flower with elegant petals.' },
  { name: 'Sunflower', description: 'A large flower with a bright yellow center.' },
];

db.run(`DELETE FROM plants`, (err) => {
  if(err) {
    console.error(err.message);
  } else {
    console.log('\nDELETED ALL DATA\n')
  }
})

// Use a loop to insert each plant into the database
plants.forEach((plant) => {
  const { name, description } = plant;

  db.run(`INSERT INTO plants (name, description) VALUES (?, ?)`, [name, description], (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`Inserted ${name} into the plants table.`);
    }
  });
});

db.close();