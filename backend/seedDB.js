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
  {
    name: 'Rose',
    description: 'A beautiful flower with a lovely fragrance.',
    image_url: 'https://images.unsplash.com/photo-1569008784345-21bdc27202b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Flowering plants',
    species: 'Rosa',
    age: 3,
    last_watered: '2023-02-10',
    watering_frequency: 7
  },
  {
    name: 'Tulip',
    description: 'A colorful flower with a distinctive shape.',
    image_url: 'https://images.unsplash.com/photo-1615669527168-8766827a7159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    category: 'Flowering plants',
    species: 'Tulipa',
    age: 1,
    last_watered: '2023-02-12',
    watering_frequency: 5
  },
  {
    name: 'Lily',
    description: 'A delicate flower with elegant petals.',
    image_url: 'https://images.unsplash.com/photo-1567428051128-5f09a0200655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Flowering plants',
    species: 'Lilium',
    age: 2,
    last_watered: '2023-02-11',
    watering_frequency: 4
  },
  {
    name: 'Sunflower',
    description: 'A large flower with a bright yellow center.',
    image_url: 'https://images.unsplash.com/photo-1593026238161-ac5f86e5ef79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Flowering plants',
    species: 'Helianthus',
    age: 1,
    last_watered: '2023-02-13',
    watering_frequency: 3
  },
  {
    name: "Green Thumb",
    description: "A beautiful succulent plant with green leaves.",
    image_url: "https://tobebright.com/wp-content/uploads/2020/06/IMG_5354-1080x1439.jpg",
    category: "Succulents and cacti",
    species: "Echeveria elegans",
    age: 2,
    last_watered: "2022-04-23",
    watering_frequency: 7,
  },
  {
    name: "Basil",
    description: "A fragrant herb with a sweet and spicy aroma, commonly used in Italian cuisine.",
    image_url: "https://www.cranbourn.com/wp-content/uploads/2022/03/basil-header.jpeg",
    category: "Herbs",
    species: "Ocimum basilicum",
    age: 2,
    last_watered: "2023-04-23",
    watering_frequency: 7,
  }
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
  const { name, description, image_url, category, species, age, last_watered, watering_frequency } = plant;

  db.run(`INSERT INTO plants (name, description, image_url, category, species, age, last_watered, watering_frequency) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [name, description, image_url, category, species, age, last_watered, watering_frequency], (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`Inserted ${name} into the plants table.`);
    }
  });
});

db.close();
