const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

// Use CORS and Body-Parser Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',      // Your MySQL server host
  user: 'root',           // Your MySQL username
  password: 'mysql01',           // Your MySQL password
  database: 'crms'        // Your MySQL database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Could not connect to MySQL:', err);
    process.exit();
  }
  console.log('Connected to MySQL database.');
});

// POST Route to Handle Signup
app.post('/api/signup', (req, res) => {
  const { email, password } = req.body;

  const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(query, [email, password], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Error saving user data');
    }
    return res.status(200).send('User registered successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:8080`);
});
