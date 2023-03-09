const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const db = require('./database');

const app = express();

const PORT = 5000;
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
})