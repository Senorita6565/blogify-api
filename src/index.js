const http = require('http');

// Define the port and response message
const PORT = 3000;
const MESSAGE = 'Hello, World!';

console.log('Starting server...');

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Success
  res.setHeader('Content-Type', 'text/plain');
  res.end(MESSAGE);
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

server.on('error', (err) => {
  console.error('Server error:', err);
});
