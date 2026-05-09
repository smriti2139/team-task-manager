# Team Task Manager (Full-Stack)

## Project Overview

Team Task Manager is a full-stack web application developed using the MERN stack. The application allows users to create projects, assign tasks, and track task progress with role-based authentication.

The system supports two roles:

* Admin
* Member

Admins can create projects and manage tasks, while members can view and update assigned tasks.

---

# Features

## Authentication

* User Signup
* User Login
* JWT Authentication
* Password Hashing using bcryptjs

## Project Management

* Create Projects
* View Projects
* Team-based project structure

## Task Management

* Create Tasks
* Assign Tasks
* Update Task Status
* Delete Tasks
* Task Priority Levels

## Dashboard

* View all tasks
* Track task status
* Manage project workflow

## Security

* Protected Routes
* Role-Based Access Control

---

# Tech Stack

## Frontend

* React.js
* Tailwind CSS
* Axios
* React Router DOM

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas

## Authentication

* JWT (JSON Web Tokens)
* bcryptjs

# Deployment

## Frontend - Vercel
https://team-task-manager-pearl-one.vercel.app/

## Backend - Railway
https://team-task-manager-05dg.onrender.com

---

# Folder Structure

```bash
team-task-manager/
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── components/
│   │   └── App.jsx
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
```

---

# Installation Steps

## Clone Repository

```bash
git clone <repository_link>
cd team-task-manager
```

---

# Backend Setup

```bash
cd server
npm install
npm run dev
```

Create `.env` file inside server:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

# Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# API Endpoints

## Authentication

```http
POST /api/auth/signup
POST /api/auth/login
```

## Projects

```http
POST /api/projects
GET /api/projects
```

## Tasks

```http
POST /api/tasks
GET /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id
```

---

# Deployment Links

## Frontend

Add Vercel deployed link here.

## Backend

Add Railway deployed link here.

---

# Future Improvements

* Team member invitation system
* Email notifications
* Advanced analytics dashboard
* File attachments

---

# Author
Smriti
