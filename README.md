# 🛒 Amazon Clone (MERN Stack)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()
[![Docker](https://img.shields.io/badge/docker-ready-blue)]()

A high-fidelity full-stack e-commerce application that replicates the core functionality of Amazon, featuring a robust backend, real-time payments, and a responsive frontend.

---

## 🚀 Key Features

*   **User Accounts**: Secure Authentication (JWT) & Profile Management.
*   **Product Catalog**: Advanced search, filtering, and responsive product grids.
*   **Shopping Cart**: Persistent cart state with Redux/Context API.
*   **Checkout & Payments**: Integrated **Stripe** payment gateway for secure transactions.
*   **Order Management**: Detailed order history and status tracking.
*   **Wishlist**: Save favorite items for later.
*   **Dark Mode**: Native dark mode support for better accessibility.
*   **Containerized**: Fully Dockerized for easy deployment.

## 🛠 Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend** | React.js, Context API, Material UI, Axios |
| **Backend** | Node.js, Express, Mongoose (MongoDB) |
| **Auth** | JWT, Bcrypt |
| **Payments** | Stripe API |
| **DevOps** | Docker, Docker Compose |

## 📦 Installation & Setup

### Prerequisites
*   Node.js v18+
*   MongoDB (Local or Atlas)
*   Stripe Account

### Quick Start (Docker)
```bash
docker-compose up --build
```

### Manual Setup
1.  **Clone the repository**
    ```bash
    git clone https://github.com/Xanoster/Amazon.git
    cd Amazon
    ```

2.  **Install Backend Dependencies**
    ```bash
    cd server
    npm install
    cp .env.example .env
    # Add your MONGO_URI and STRIPE_SECRET in .env
    npm start
    ```

3.  **Install Frontend Dependencies**
    ```bash
    cd client
    npm install
    npm start
    ```



## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
