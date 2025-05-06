const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize the express app
const app = express();
const PORT = 3000;
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Hardcoded users for demonstration (typically, this would come from a database)
const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', password: 'alice123' },
  { id: 2, name: 'Bob', email: 'bob@example.com', password: 'bob123' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', password: 'charlie123' }
];

// Endpoint to authenticate a user
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Find the user by email
  const user = users.find(u => u.email === email);

  // Check if the user exists and the password matches
  if (user && user.password === password) {
    // Successful authentication
    return res.status(200).json({
      message: 'Login successful',
      user: { id: user.id, name: user.name, email: user.email }
    });
  }

  // Invalid credentials
  return res.status(401).json({ message: 'Invalid email or password' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
