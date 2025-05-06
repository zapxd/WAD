const http = require('http');
const fs = require('fs');
const path = require('path');

// Define a port
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set default content-type
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Serve home.html for /home route
  if (req.url === '/home') {
    fs.readFile(path.join(__dirname, 'home.html'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading home page');
      } else {
        res.end(data); // Serve the home page content
      }
    });
  } else if (req.url === '/') {
    res.end('<h1>Welcome to the Server!</h1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Page not found');
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
