# todo-app

> **Created by**: Sahil Parbat
> **Email**: sahilparbat24@gmail.com

# To-Do List Application (MERN Stack)

A To-Do List application with Node.js/Express backend and React frontend supporting task creation, listing, deletion, and completion status updates.

## Features

- **Task Management**
  - Add new tasks with validation
  - Mark tasks as complete/incomplete
  - Delete tasks
  - View all tasks 

- **User Experience**
  - Responsive design (works on all devices)
  - Real-time updates without page refresh
  - Clean, intuitive interface
  - Empty state handling


## Technologies Used

- **Backend**:
  - Node.js
  - Express
  - REST API architecture

- **Frontend**:
  - React
  - Functional components with hooks
  - CSS for styling

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

### Backend Setup

1. Navigate to the backend directory:
   cd backend

2. Install dependencies:
   npm install

3. Start the server:
   node server.js

- The backend will run on http://localhost:5000

### Frontend

1. Navigate to the frontend folder:
   cd frontend

2. Install dependencies
   npm install

3. Start the development server:
   npm start

- The frontend will run on http://localhost:3000

## Step: Running the Application

1. Open two terminal windows:

   - In the first, navigate to ` cd backend` and run `node server.js`
   - In the second, navigate to ` cd frontend` and run `npm start`

2. Open your browser to `http://localhost:3000` to see the application.

## Testing the Application

### Manual Testing

1. **Backend API** (test using Postman):

# Get all tasks

http://localhost:5000/tasks

# Add new task

POST http://localhost:5000/tasks "Content-Type: application/json" '{"title":"Test Task"}'

# Toggle task status

PUT http://localhost:5000/tasks/1
PUT http://localhost:5000/tasks/{id}

# Delete task (replace :id)

DELETE http://localhost:5000/tasks/1

    DELETE http://localhost:5000/tasks/{id}



#### Project Structure
    todo-app/
├── backend/
│   ├── server.js       # Express server
│   ├── routes/tasks.js         # API endpoints
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/ # React components
    │   ├── App.css     # Main styles
    │   └── App.js      # Root component
    └── package.json
