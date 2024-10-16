# MyTasks - Go Todo Fiber API

Welcome to **MyTasks**, a full-stack ToDo application built with **React, TypeScript, Chakra UI**, and **Fiber** (Go). This project uses **MongoDB** as the database and is deployed on **Railway** for backend hosting. This repository contains the **Go-based backend API**.

## 🚀 Live Demo

**Frontend**: [MyTasks Frontend](https://go-todo-fiber-api-production.up.railway.app)  
**Backend API**: [Go Todo Fiber API](https://go-todo-fiber-api-production.up.railway.app/api)

---

## 🗂️ Project Structure

### Frontend

- **React** (TypeScript) for a responsive user interface
- **Chakra UI** for component-based styling

### Backend

- **Fiber** (Go) for a lightweight, fast web framework
- **MongoDB** for persistent data storage

### Deployment

- **Railway** for seamless backend hosting

---

## 📋 Features

- **Task Management**: Add, edit, delete, and view tasks.
- **Real-time updates**: Tasks sync instantly between the frontend and backend.
- **Minimal Design**: Clean, modern UI using Chakra UI.
- **API Endpoints**:
  - `GET /api/tasks` – Fetch all tasks
  - `POST /api/tasks` – Create a new task
  - `PUT /api/tasks/:id` – Update an existing task
  - `DELETE /api/tasks/:id` – Delete a task

---

## 🛠️ Tech Stack

### Frontend:

- **React**
- **TypeScript**
- **Chakra UI**

### Backend:

- **Go** (with Fiber)
- **MongoDB**
- **Railway** for backend deployment

---

## 🚀 Setup and Run Locally

Follow these steps to clone and run the backend API locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/07SUJITH/go-todo-fiber-api.git
   cd go-todo-fiber-api
   ```

2. **Create a `.env` file**:  
   In the root directory of your project, create a file named `.env` and add the following configuration:

   ```plaintext
   # The port on which the application will run locally
   PORT=8080

   # MongoDB connection string (replace with your actual MongoDB URI)
   MONGODB_URI=your_mongodb_uri

   # Environment type
   ENV=development
   ```

3. **Install Go Dependencies**

   ```bash
   go mod download
   ```

4. **Run MongoDB Locally**  
   Make sure you have MongoDB running on `mongodb://localhost:27017`. Adjust the connection string in the code if needed.

5. **Run the Server**

   ```bash
   go run main.go
   ```

6. **Access API**  
   The server will start at `http://localhost:8080/api`. Use Postman or curl to test the endpoints.

---

## 🌐 Deployment

The backend API is deployed on **Railway** at:  
[https://go-todo-fiber-api-production.up.railway.app](https://go-todo-fiber-api-production.up.railway.app)

Happy Coding! 🚀
