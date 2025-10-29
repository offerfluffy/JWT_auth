# JWT Authentication Project

This project demonstrates a full-stack application implementing JSON Web Token (JWT) based authentication. It includes a React frontend client and a Node.js/Express backend server.

---

## Features ✨

* **User Registration:** New users can sign up with an email and password.
* **User Login:** Registered users can log in to receive access and refresh tokens.
* **JWT Authentication:** Uses JWT access tokens for securing API routes and refresh tokens for renewing sessions.
* **Email Activation:** Sends an activation email upon registration. Users need to click the link to activate their account.
* **Logout:** Allows users to log out, clearing their session.
* **Protected Routes:** Example route (`/api/users`) requires authentication to access.

---

## Technologies Used 💻

**Frontend (Client):**
* React
* TypeScript
* MobX (for state management)
* Axios (for HTTP requests)
* Create React App

**Backend (Server):**
* Node.js
* Express
* Mongoose (for MongoDB object modeling)
* jsonwebtoken (for JWT handling)
* bcrypt (for password hashing)
* Nodemailer (for sending emails)
* dotenv (for environment variables)
* cookie-parser
* cors
* express-validator (for input validation)
* uuid (for generating unique IDs like activation links)

---

## Setup and Installation ⚙️

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd jwt_auth
    ```

2.  **Backend Setup:**
    * Navigate to the server directory: `cd server`
    * Install dependencies: `npm install`
    * Create a `.env` file in the `server` directory based on required variables (like `PORT`, `DB_URL`, `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `API_URL`, `CLIENT_URL`).
    * Run the development server: `npm run dev`

3.  **Frontend Setup:**
    * Navigate to the client directory: `cd ../client`
    * Install dependencies: `npm install`
    * Ensure the `API_URL` in `client/src/http/index.ts` points to your backend server (e.g., `http://localhost:5005/api`).
    * Run the development server: `npm start`

---

## Running the Application 🚀

* **Backend:** Run `npm run dev` in the `server` directory. The server typically starts on port 5000 or the port specified in your `.env` file.
* **Frontend:** Run `npm start` in the `client` directory. The React application usually opens on `http://localhost:3000`.
