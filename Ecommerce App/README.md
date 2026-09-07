# MERN Stack E-commerce App

A full-stack e-commerce application built using the MERN stack (MongoDB, Express, React, Node.js). This repository contains the backend API responsible for handling users, products, and orders.

## Key Features & Implementations

*   **Auth middleware protecting private routes**
    *   Secure routes using JSON Web Tokens (JWT) stored in HTTP-only cookies.
    *   Role-based authorization (e.g., admin vs. user) to restrict access to sensitive actions.
*   **Product and order CRUD implemented**
    *   Create, Read, Update, and Delete operations for both Products and Orders.
    *   Advanced features like pagination, filtering, and searching.
*   **Clean MVC folder structure**
    *   Separation of concerns using the Model-View-Controller architecture.
    *   Controllers handle business logic, Models define database schemas, and Routes manage endpoints.
*   **Environment variables used for secrets**
    *   Sensitive information such as `JWT_SECRET`, database connection strings, and SMTP credentials are secure and loaded via environment variables (`.env`).

## Technologies Used

*   **Node.js & Express.js:** Backend framework and routing.
*   **MongoDB & Mongoose:** Database and Object Data Modeling (ODM).
*   **Bcrypt.js & JSON Web Tokens:** Password hashing and secure authentication.
*   **Cloudinary:** Cloud storage for image uploads (avatars, product images).
*   **Nodemailer:** Sending emails for password recovery and notifications.
*   **Cookie-parser:** Handling cookies for authentication tokens.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `config.env` file in the `backend/config` directory with your environment variables (e.g., `PORT`, `DB_URI`, `JWT_SECRET`, `SMPT_MAIL`, etc.).
4. Start the server: `npm run dev`
