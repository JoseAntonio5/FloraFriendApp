const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = 'FloraFriend.db';

// database connection
const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log('Connected to the database.');
      // Create the "plants" table if it doesn't exist
      db.run(`CREATE TABLE IF NOT EXISTS plants (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              description TEXT
              )`,
      (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Created "plants" table.');
        }
      });
    }
  });

module.exports = db;