# CECS-327-Project-2
Chatbot application using microservices
Contributor:
1. Khoa Diep
2. Min Tang Ting

# Node.js & React.js Chat Application Setup

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
### Step2: Install Dependencies
Install the necessary npm packages:
```bash
npm install express cors axios
```
- Express : A web framework for Node.js
- CORS: Middleware to enable cross-origin resource sharing.
- Axios: A promise-based HTTP client for making requests to external APIs.

Additionally, install **'nodemon'** as a development dependency:
```bash
npm install --save-dev nodemon
```

### Step3: Configue Scripts
Modify the **'package.json'** to include a script for starting the server using **'nodemon'**:
``` bash
"scripts": {
  "start": "nodemon index.js"
}
```


 
