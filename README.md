# ✅ TaskFlow — Full-Stack Todo List App

A responsive full-stack task management application built with **React**, **Node.js**, **Express**, **Prisma**, and **MySQL**. Designed for instant use with zero sign-up required—users can create, view, and manage tasks immediately via persistent guest sessions.

🔗 **Live Demo:** [View on Vercel](https://vercel.app)

---

## ✨ Features

### Current Features
- **Instant Guest Access:** Create and manage tasks immediately without logging in or creating an account.
- **Full Task Management:** Add new tasks with headings and descriptions, view tasks in real time, and delete tasks cleanly without page reloads.
- **Interactive Confirmations:** Prevents accidental deletions using SweetAlert confirmation dialogs and status notifications.
- **Modern UI & Icons:** Clean interface enhanced with `react-icons`.

### Upcoming Roadmap
- [ ] **Progress Tracking:** Visual progress bars for tasks and headings.
- [ ] **Inline Editing:** Edit existing headings and topics directly.
- [ ] **Scoped Topic Creation:** Add new topics under specific headings.

---

## 🛠️ Tech Stack
- **Frontend:** React, Vite, `react-icons`, SweetAlert
- **Backend:** Node.js, Express.js
- **Database & ORM:** MySQL, Prisma
- **Hosting:** Vercel

---

## 📁 Project Structure
```text
TodoList App/
├── backend/         # Express API, Prisma schema, and server logic
└── frontend/        # React + Vite client application
```

---

## 🚀 Local Setup

### 1. Clone the repository
```bash
git clone https://github.com
cd your-repo-name
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file inside the `backend` folder:
```env
PORT=5000
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"
```
Generate the Prisma client, sync your database, and start the server:
```bash
npx prisma generate
npx prisma db push
npm run dev
```

### 3. Frontend Setup
Open a new terminal window:
```bash
cd frontend
npm install
```
Create a `.env` file inside the `frontend` folder:
```env
VITE_API_URL="http://localhost:5000"
```
Start the Vite development server:
```bash
npm run dev
```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
