# 🧑‍🤝‍🧑 Simple Social Media Platform (Node.js)

A mini **Social Media Platform** built using **HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB**.
This project demonstrates core social media features such as **user authentication, posts, comments, likes, and basic follow functionality**, making it suitable for internship and academic submissions.

---

## 📌 Project Features

### 👤 User Management

* User registration with username and password
* User login authentication
* Basic validation for inputs
* User data stored securely in MongoDB

### 📝 Posts & Comments

* Users can create posts
* View all posts in a feed
* Comment on posts
* Posts and comments stored in database

### ❤️ Like & 👥 Follow System

* Users can like posts
* Prevents duplicate likes by the same user
* Basic follow/unfollow functionality
* Simulates real-world social media interaction

### 🌐 Frontend Pages

* **Register Page** – New user signup
* **Login Page** – Existing user authentication
* **Home / Feed Page** – View posts, like, and comment

---

## 🧑‍💻 Tech Stack

**Frontend:**

* HTML5
* CSS3
* JavaScript

**Backend:**

* Node.js
* Express.js

**Database:**

* MongoDB

**Tools:**

* Git & GitHub
* VS Code

---

## 📁 Project Structure

```
CodeAlpha_social-media_app/
│
├── frontend/
│   ├── login.html
│   ├── register.html
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Post.js
│   │
│   ├── routes/
│   │   └── userRoutes.js
│   │
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
│   └── .gitignore
│
└── README.md
```

---

## ⚙️ How to Run the Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/cse-priyanka/CodeAlpha_social-media_app.git
```

### 2️⃣ Navigate to Backend Folder

```bash
cd CodeAlpha_social-media_app/backend
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Setup Environment Variables

Create a `.env` file inside the backend folder:

```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

### 5️⃣ Start the Server

```bash
node server.js
```

Server runs at:

```
http://localhost:3000
```

### 6️⃣ Run Frontend

Open `frontend/login.html` in your browser.

---

## 🔄 Application Workflow

1. User registers an account
2. User logs in using credentials
3. User creates a post
4. Other users can like and comment on posts
5. Data is stored and managed using MongoDB
6. Backend handles authentication and post logic

---

## 🚀 Future Enhancements

* Profile pictures
* Advanced follow system
* Real-time notifications
* JWT-based authentication
* Deployment to cloud platform

---

## 🎯 Learning Outcomes

* Understanding Express.js backend architecture
* Frontend–backend communication using REST APIs
* MongoDB schema design
* Implementing social media logic (likes, comments)
* Using GitHub for version control

---

## 📌 Internship / Academic Use

This project was developed as part of a **CodeAlpha Full Stack Development Internship** and is suitable for:

* Internship evaluation
* Mini-project submission
* Full-stack practice

---

## 📜 License

This project is for educational purposes only.

---

### ✨ Author

**Priyanka**

GitHub: [https://github.com/cse-priyanka](https://github.com/cse-priyanka)
