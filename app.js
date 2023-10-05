const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: '******',
  user: '******',
  password: '******',
  database: 'REGISTRAT',
  insecureAuth : true,
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Create a registration form route
app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle registration form submission
app.post('/index', (req, res) => {
  const { username,name, email, password } = req.body;
  const userData = { username,name, email, password };

  // Insert user data into the database
  db.query('INSERT INTO reg SET ?', userData, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error registering user');
    } else {
      console.log('User registered');
      res.status(200).send('<h1>User Registered successfully<h1>');
    }
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
