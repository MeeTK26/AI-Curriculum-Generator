# 🚀 AI-Powered Curriculum Generator

An AI-powered web application that generates structured learning roadmaps based on user input such as topic, difficulty level, and duration.

---

## 🧠 Features

* 📚 Generate structured curriculum (Beginner → Advanced)
* 🎯 Customizable difficulty level & duration
* 🧩 Module-wise breakdown with topics, projects, and resources
* 📄 Export curriculum as a clean PDF
* 🎨 Modern UI with animations and glassmorphism design
* ⚡ Real-time generation using LLM (Local / API-based)

---

## 🏗️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Framer Motion

### Backend

* Node.js
* Express.js

### AI Integration

* Local LLM (Ollama - Phi)

---

## 📂 Project Structure

```
AI-Curriculum-Generator/
│── Backend/
│── frontend/
│── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/MeeTK26/AI-Curriculum-Generator.git
cd AI-Curriculum-Generator
```

---

### 2️⃣ Backend Setup

```
cd Backend
npm install
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm start
```

---

## ⚠️ Important Note

This project currently uses a **local LLM (Ollama)** for content generation.

👉 Ensure Ollama is running locally:

```
http://localhost:11434
```

👉 If deploying, replace with a cloud-based LLM API.

---

## 📄 PDF Export

* Generates clean, structured curriculum
* Includes clickable resource links
* Black & white professional format

---

## 🧠 Key Learnings

* Handling unreliable LLM JSON outputs
* Building robust parsing & fallback mechanisms
* Designing scalable frontend architecture
* Implementing PDF generation from structured data
* Creating production-like UI/UX

---

## 👨‍💻 Author

**Meet Lad**

---

## ⭐ If you like this project

Give it a star ⭐ on GitHub!
