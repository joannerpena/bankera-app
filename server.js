const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server running!`));