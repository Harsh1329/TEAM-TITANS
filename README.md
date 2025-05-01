# Team Titans - Student Team Management App

This is a full-stack web application to manage team members with roles, photos, and emails. Built using the MERN stack.

---

## 🛠 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Styling**: CSS

---

## 📦 Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Team-Titans.git
cd Team-Titans

Install backend dependencies:
cd server
npm install

Install frontend dependencies:
cd ../client
npm install

Start MongoDB locally:
mongod

Run backend:
cd server
node server.js

Run frontend:
cd client
npm start


API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/members         | Get all members         |
| GET    | /api/members/:id     | Get member by ID        |
| POST   | /api/members         | Add member (with image) |
| DELETE | /api/members/:id     | Delete member           |

How to Run the App
Run MongoDB server (port 27017)

Run backend on localhost:5000

Run frontend on localhost:3000

Add/view/delete members
