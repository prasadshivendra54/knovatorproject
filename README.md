## 🔗 Click here to view the live app 👇
🌐 Live Demo - https://knovator-frontend.onrender.com/

# 🧿 Mini Job Board Application

This is a full-stack job board web app built using ReactJS, NodeJS, Express, and MongoDB. The application allows users to view available job listings, post new jobs, and read full job details.

## 📁 Project Structure

job-board-app/
client/ # Frontend (React)
server/ # Backend (NodeJS + Express)
README.md # Project Overview & Setup Instructions

---

## 🚀 Features

### ✅ Frontend (`/client`)
- Homepage with a list of job cards (title, company, type, location).
- "Add Job" form to submit new job listings.
- Job detail page that displays complete information using job ID.
- Styled using CSS with optional responsive layout.

### ✅ Backend (`/server`)
- API Endpoints:
  - `GET /api/jobs` — Fetch all job listings
  - `GET /api/jobs/:id` — Get job details by ID
  - `POST /api/jobs` — Submit a new job
- Request validation and basic error handling implemented.

### ✅ Database (MongoDB + Mongoose)
- Jobs are stored with the following schema:
```js
{
  title: String,
  company: String,
  type: String,
  location: String,
  description: String,
  createdAt: { type: Date, default: Date.now }
}
🧪 Bonus Functionalities

Loading spinner on data fetch.

Deployed version using Render

MongoDB hosted on MongoDB Atlas.

Form validations on client and server side.

📦 Tech Stack
Frontend: ReactJS, JavaScript, Tailwind CSS

Backend: NodeJS, ExpressJS

Database: MongoDB, Mongoose

⚙️ Getting Started
🧰 Prerequisites
Node.js (v16+)

MongoDB (Local or Atlas)

npm

🔧 Setup Instructions
1. Clone the repository
git clone https://github.com/prasadshivendra54/knovatorproject.git
cd knovatorproject
2. Start the backend
cd server
npm install
npm start (No nedded for run backend, backend deployed on render, you can run only frontend)
3. Start the Frontend
cd client
npm install
npm start

🌐 Live Demo https://knovator-frontend.onrender.com/
🔗 Click here to view the live app 👆

📩 Contact
For any queries, suggestions or feedback, feel free to reach out 👇
Email - tshivendra07@gmail.com

📌 Author
Developed by Shivendra kacher

---