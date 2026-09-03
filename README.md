# Backend_Task_1
This is my  First Backend Task
# Backend Task 1 🚀

A backend REST API project built using **Node.js, Express.js, and MySQL** following the **MVC (Model-View-Controller) architecture**.

## 📌 About the Project

This project is a backend application that provides RESTful APIs for managing users, products, and orders.

It includes:

* User Registration & Login
* User Authentication & Authorization
* Product Management
* Order Management
* MySQL Database Integration
* MVC Architecture
* Middleware
* JWT Authentication
* Password Hashing
* Automated Email Notifications
* Cron Job Scheduling
* Environment Variables using `.env`

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **MySQL**
* **JWT**
* **bcrypt**
* **Nodemailer**
* **Node-Cron**
* **dotenv**
* **mysql2**

## 📂 Project Structure

```text
Backend_Task_1/
│
├── Controller/
│   ├── userController.js
│   ├── productController.js
│   └── orderController.js
│
├── Models/
│   ├── userModel.js
│   ├── productModel.js
│   └── orderModel.js
│
├── Routes/
│   ├── userRoutes.js
│   ├── productRoutes.js
│   └── orderRoutes.js
│
├── Utility/
│   └── utility files
│
├── config/
│   └── database configuration
│
├── middleware.js
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Nehapatel2003/Backend_Task_1.git
```

Go to the project directory:

```bash
cd Backend_Task_1
```

Install dependencies:

```bash
npm install
```

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database

JWT_KEY=your_secret_key

USER=your_email
PASS=your_email_password
```

**Do not upload `.env` to GitHub.**

## ▶️ Run the Project

For normal execution:

```bash
node index.js
```

For development using nodemon:

```bash
npm run dev
```

The server will run on:

```text
http://localhost:5000
```

## 🔗 API Modules

### 👤 Users

| Method | Endpoint              | Description     |
| ------ | --------------------- | --------------- |
| POST   | `/api/users/register` | Register a user |
| POST   | `/api/users/login`    | Login user      |
| GET    | `/api/users`          | Get all users   |
| GET    | `/api/user/:id`       | Get user by ID  |

### 📦 Products

Product APIs are used to create, read, update, and delete products.

### 🛒 Orders

Order APIs are used to create and manage customer orders.

Orders are associated with users and products using foreign keys.

## 🔒 Authentication

The project uses **JWT (JSON Web Token)** for authentication.

Protected APIs require a valid token:

```text
Authorization: Bearer <token>
```

## 📧 Email & Cron Job

The project uses **Nodemailer** for sending emails and **node-cron** for scheduling automated tasks.

For example, an email can be sent automatically when an order is pending.

## 🗄️ Database

The project uses **MySQL** as the database.

Main tables:

```text
users
products
orders
```

The `orders` table is connected to the `users` and `products` tables using foreign keys.

## 📁 MVC Architecture

The project follows MVC architecture:

* **Models** → Database queries
* **Controllers** → Business logic
* **Routes** → API endpoints
* **Middleware** → Authentication and authorization
* **Utility** → Helper functions
* **Config** → Database configuration

## 👩‍💻 Author

**Neha Patel**

GitHub:
https://github.com/Nehapatel2003

## ⭐ Repository

https://github.com/Nehapatel2003/Backend_Task_1
