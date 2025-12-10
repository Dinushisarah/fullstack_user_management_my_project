# Full-Stack User Management Application

A complete full-stack web application built with React, Node.js, Express, and MongoDB that allows users to register, login, and manage user accounts with CRUD operations.

![Project Banner](https://via.placeholder.com/800x200/667eea/ffffff?text=Full+Stack+User+Management)

## 🚀 Features

- **User Authentication**
  - User registration with password hashing
  - Secure login with JWT tokens
  - Protected routes
  - Logout functionality

- **User Management**
  - View all registered users
  - Delete users
  - Real-time updates

- **Modern UI**
  - Beautiful gradient design
  - Responsive layout
  - Clean and intuitive interface

## 🛠️ Technologies Used

### Frontend
- **React** - JavaScript library for building user interfaces
- **React Router DOM** - Routing and navigation
- **Axios** - HTTP client for API calls
- **CSS3** - Styling and animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **dotenv** - Environment variables
- **cors** - Cross-Origin Resource Sharing

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB Atlas Account** (free) - [Sign up here](https://www.mongodb.com/cloud/atlas/register)
- **Git** - [Download here](https://git-scm.com/)

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd my-fullstack-app
```

### 2. Backend Setup
```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
# Add the following:
PORT=5000
MONGODB_URI=your_mongodb_connection_string_here
JWT_SECRET=your-secret-key-change-this

# Start the backend server
npm start
```

The backend server will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal:
```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start the frontend development server
npm start
```

The frontend will open automatically at `http://localhost:3000`

## 📁 Project Structure
```
my-fullstack-app/
├── backend/
│   ├── models/
│   │   └── User.js           # User model schema
│   ├── routes/
│   │   ├── auth.js           # Authentication routes
│   │   └── users.js          # User CRUD routes
│   ├── .env                  # Environment variables
│   ├── server.js             # Main server file
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Register.js   # Registration page
│   │   │   ├── Login.js      # Login page
│   │   │   ├── Home.js       # Home page (user list)
│   │   │   ├── Auth.css      # Auth pages styling
│   │   │   └── Home.css      # Home page styling
│   │   ├── App.js            # Main app component
│   │   └── index.js
│   └── package.json
│
└── README.md
```

## 🔌 API Endpoints

### Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

### User Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get single user |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |

## 🎯 Usage

### Register a New User

1. Navigate to `http://localhost:3000/register`
2. Fill in your name, email, and password
3. Click "Register"
4. You'll be automatically redirected to the Home page

### Login

1. Navigate to `http://localhost:3000/login`
2. Enter your email and password
3. Click "Login"
4. You'll be redirected to the Home page

### View Users

- After logging in, you'll see a table of all registered users
- Each user entry shows their name and email

### Delete Users

- Click the "Delete" button next to any user
- Confirm the deletion
- The user will be removed from the database

### Logout

- Click the "Logout" button in the header
- You'll be redirected to the login page

## 🔐 Environment Variables

Create a `.env` file in the `backend` folder with:
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/myapp?retryWrites=true&w=majority
JWT_SECRET=your-secret-key-change-this
```

**Important:** Never commit your `.env` file to GitHub!

## 🗄️ MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a free account
3. Create a new cluster (M0 Free tier)
4. Go to "Database Access" and create a database user
5. Go to "Network Access" and add your IP address (or allow access from anywhere for development)
6. Get your connection string from "Connect" → "Connect your application"
7. Replace `<password>` with your database user password
8. Add the connection string to your `.env` file

## 🚨 Common Issues & Solutions

### MongoDB Connection Error

**Error:** `MongoDB connection error: bad auth`

**Solution:** 
- Check that your MongoDB password is correct in the `.env` file
- Make sure there are no special characters that need URL encoding
- Verify that your IP address is whitelisted in MongoDB Atlas

### Port Already in Use

**Error:** `Port 3000 is already in use`

**Solution:**
- Type `Y` when prompted to run on another port
- Or close the application using port 3000

### Cannot Connect to Backend

**Error:** `net::ERR_CONNECTION_REFUSED`

**Solution:**
- Make sure the backend server is running (`npm start` in backend folder)
- Check that the backend is running on port 5000
- Verify the API URLs in frontend components use the correct port

## 📝 Future Enhancements

- [ ] Add Update user functionality
- [ ] Implement user profile page
- [ ] Add profile picture upload
- [ ] Add search and filter functionality
- [ ] Implement pagination for user list
- [ ] Add email verification
- [ ] Add password reset functionality
- [ ] Deploy to production (Heroku, Vercel)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@Dinushisarah](https://github.com/Dinushisarah/fullstack_user_management_my_project.git)


  ## 🙏 Acknowledgments

- Thanks to MongoDB Atlas for free database hosting
- React and Node.js communities for excellent documentation
- All the open-source libraries used in this project

---

⭐ If you found this project helpful, please give it a star!
```

---

## Also Create .gitignore

Create a `.gitignore` file in your main project folder to avoid committing sensitive files:
```
# Dependencies
node_modules/
frontend/node_modules/
backend/node_modules/

# Environment variables
.env
backend/.env

# Build files
frontend/build/
dist/

# OS files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/
*.swp
*.swo

# Logs
logs/
*.log
npm-debug.log*

# Others
.cache/)

