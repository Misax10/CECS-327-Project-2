

# CECS-327: Chatbot Application using microservices
## Contributor:
1. Khoa Diep
2. Min Tang Ting
# React + Vite

# Node.js & React.js Chat Application Setup
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

This repository contains the setup for a Node.js backend in a chat application project named `nodejs-reactjs-cecs327-chat`. The backend facilitates communication with ChatEngine.io to enable robust chat functionality.

## Prerequisites

Before starting, make sure you have the following installed:
- Node.js
- npm (Node Package Manager)
- A REST Client extension for your IDE or code editor (for testing API endpoints).
- VS Code (Installed Extension Rest Client for testing the server)

## Setup Instructions

### Step 1: Project Initialization

1. **Create a Project Directory**:
   Create and navigate into a new directory for the project:
   ```bash
   mkdir nodejs-reactjs-cecs327-chat
   cd nodejs-reactjs-cecs327-chat
2. **Initialize Node.js Backend**:
   Create a `backend` subdirectory and initialize a Node.js project within it:
   ```bash
   mkdir backend
   cd backend
   npm init -y
   ```
### Step 2: Install Dependencies
Install the necessary npm packages:
```bash
npm install express cors axios
```
- Express: A web framework for Node.js
- CORS: Middleware to enable cross-origin resource sharing.
- Axios: A promise-based HTTP client for making requests to external APIs.

Additionally, install **'nodemon'** as a development dependency:
```bash
npm install --save-dev nodemon
```
### Step 3: Create the index.js (backend- Node.js server using Express)
``` bash
// This Node.js server uses Express to handle HTTP requests and responses. It includes CORS (Cross-Origin Resource Sharing)
// to allow the server to be accessed from different origins. The server includes an authentication endpoint that interacts
// with the ChatEngine API to manage user data, ensuring users are properly authenticated in the chat system.

const express = require("express"); // Importing the Express library to handle routing and middleware
const cors = require("cors");       // Importing CORS to allow the server to accept requests from different origins
const axios = require("axios");     // Importing Axios for making HTTP requests to external services, such as ChatEngine

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
    // Sending the API response status and data back to the client
    return res.status(response.status).json(response.data);
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
```

### Step 4: Configure Scripts
Modify the **'package.json'** to include a script for starting the server using **'nodemon'**:
``` bash
"scripts": {
  "start": "nodemon index.js"
}
```
### Step 5: Running the Server
To start the server, run:
``` bash
npm run start
```
This will launch the Node.js server with **'nodemon'**, which automatically restarts the server upon file changes

### Step 6: Testing the Setup
Create a file named **'request.rest'** in the backend folder to test the server's authentication endpoint:
``` bash
POST http://localhost:3001/authenticate
Content-Type: application/json
{
  "username": "testuser"
}
```
### Step 7: Integrate Chat Functionality
Register with ChatEngine.io and create a project. Use the provided API keys in the backend to authenticate users and manage chat functionalities. This allow all users in ChatEngine project to communicate through the API and platform.
