// middleware/cors.js

const cors = require('cors');

// Define the CORS options
const corsOptions = {
  origin: 'http://127.0.0.1:5500/', // Replace with the actual domain of your frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable CORS credentials, such as cookies and HTTP authentication
  optionsSuccessStatus: 204, // Handle preflight requests properly
};

// Create a middleware function to use for enabling CORS
const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;
