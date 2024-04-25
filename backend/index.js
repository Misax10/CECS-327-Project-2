// This Node.js server uses Express to handle HTTP requests and responses. It includes CORS (Cross-Origin Resource Sharing)
// to allow the server to be accessed from different origins. The server includes an authentication endpoint that interacts
// with the ChatEngine API to manage user data, ensuring users are properly authenticated in the chat system.

const express = require("express"); // Importing the Express library to handle routing and middleware
const cors = require("cors");       // Importing CORS to allow the server to accept requests from different origins
const axios = require("axios");     // Importing Axios for making HTTP requests to external services, such as ChatEngine
const moment = require('moment-timezone')

const app = express();              // Creating an instance of an Express app
app.use(express.json());            // Middleware to parse JSON bodies of incoming requests
app.use(cors({ origin: true }));    // Enabling CORS for all domains

// POST endpoint for authenticating users
// This endpoint receives a username from the request body and either retrieves or creates a user in the ChatEngine database
app.post("/authenticate", async (req, res) => {
  const { username } = req.body; // Extracting username from the request body

  try {
    // Making an HTTP PUT request to ChatEngine API to manage user data
    const response = await axios.put(
      'https://api.chatengine.io/users/', // ChatEngine users endpoint
      { username: username, secret: username, first_name: username }, // User data payload
      { headers: {"private-key": '648907b1-d76d-4253-9f8f-9818b6e9a02e'}} // Authentication header with private key
    );

    // Get current time in PDT
    const pdtTime = moment().tz('America/Los_Angeles').format('YYYY-MM-DD HH:mm:ss');

    // Sending the API response status and data back to the client
    return res.status(response.status).json({
      data:  response.data,
      serverTimePDT: pdtTime
    });
    
  } catch (e) {
    // Handling errors that occur during the API request
    if (e.response) {
      // If the error is an HTTP response error, send the status and data from the error response
      return res.status(e.response.status).json(e.response.data);
    } else {
      // For all other errors, log the error and send a generic server error response
      console.error('Error:', e.message);
      return res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
});

// Server listens on port 3001 for incoming connections
app.listen(3001, () => console.log('Server running on port 3001'));
