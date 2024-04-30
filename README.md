

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
