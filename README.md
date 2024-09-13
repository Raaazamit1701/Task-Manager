
# TASK MANAGER - MERN 

 The task manager app is a versatile productivity tool that have task management Users can efficiently organize, prioritize, and track their tasks.

# Intrtoduction

 Welcome to our Task Manager App – your all-in-one solution for efficient task management, seamless to-do list organization, and convenient note-taking. 
# Features
# Task Management :

Create, edit, and delete tasks with ease.

Specify due dates, priorities, and track task status effortlessly.

Categorize and filter tasks for a customized and organized view.

Get notify through the app on bell icon


# DEMO
## Login Page
![Screenshot (55)](https://github.com/John12356/Task-Manager--First-MERN/assets/91779049/e6c16d98-9342-4d37-b17c-7035fcbd77dd)
## Home Page
![Screenshot (65)](https://github.com/John12356/Task-Manager--First-MERN/assets/91779049/d9e4fc89-d1ad-4604-b610-6842e5e71b48)
## Task Page
![Screenshot (62)](https://github.com/John12356/Task-Manager--First-MERN/assets/91779049/0ac74f42-3851-4102-a2f9-ee609ded1eba)
## Dark - Mode
![Screenshot (64)](https://github.com/John12356/Task-Manager--First-MERN/assets/91779049/30f8cd99-c136-4721-b552-6a146827ed88)

## Technologies Used

- **Frontend:**
  - [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
  - [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [React.js](https://reactjs.org/)

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)

- **Database:**
  - [MongoDB](https://www.mongodb.com/)

- **Other Tools:**
  - [Git](https://git-scm.com/)
  - [GitHub](https://github.com/)
  - [VSCode](https://code.visualstudio.com/)
    
# Getting Started
## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js; npm v6.14.6 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (v4.0 or higher)
- [Your preferred web browser](https://www.google.com/chrome/)

> Note: Make sure to install the specified versions or higher to avoid compatibility issues.

To check if you have Node.js and npm installed, run the following commands in your terminal:

```bash
node --version
npm --version
```
## How To Run
Create the file `BackEnd/config.env` with your Atlas URI and the server port:

**FrontEnd**
```
REACT_APP_API_URL = your backend api with port
```
**BackEnd**
```
MONGO_URL = your mongoDb url either from atlas or from localhost shell
```
If you are going Authenticate with Facebook and Google Through PassportJs Stratgy...
```
FRONTEND_DOMAIN = you react app url with port
SESSION_SECRET = anything you want
JWT_SECRET_KEY = anything you want
```
Start server i.e., BackEnd:
```
cd Task-Manager--First-MERN/BackEnd
npm install
npm start
```
Start Client i.e., FrontEnd:
```
cd Task-Manager--First-MERN/FrontEnd
npm install
npm start or npm run dev
```
## Getting Started

1. Fork the repository.
2. Clone your forked repository:
 ```bash
   git clone https://github.com/Raaazamit1701/Task-Manager
```
