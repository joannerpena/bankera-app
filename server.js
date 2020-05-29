const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(
  express.json({
    extended: false,
  })
);

const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello World!'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/account', require('./routes/api/account'));
app.use('/api/transfer', require('./routes/api/transfer'));
app.use('/api/transaction', require('./routes/api/transaction'));

app.listen(port, () => console.log(`Server running!`));
