// Import dependencies
const express = require('express');
const randomstring = require('randomstring');

// Create an Express app
const app = express();

// Set up body parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the public directory
app.use(express.static('public', { extensions: ['html'] }));

// Define a route to handle the form submission
app.post('/generate', (req, res) => {
  const url = req.body.url; // Get the submitted URL from the request body

  // Generate a short link using random string
  const shortLink = randomstring.generate(7); // Adjust the length as desired

  // Store the short link and URL in a database or data structure of your choice

  // Send the short link as the response
  res.json({ shortLink });
});

// Start the server
const port = 3000; // Set the desired port number
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
