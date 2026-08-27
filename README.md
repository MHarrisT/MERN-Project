# MERN Stack Project

This is a full-stack MERN (MongoDB, Express, React, Node.js) application featuring basic CRUD (Create, Read, Update, Delete) operations.

## Features & Requirements Fulfilled

1. **Frontend API Calls**: The React frontend successfully uses `axios` to make HTTP requests to the Express backend.
2. **Real-time UI Updates**: 
   - When a user is deleted, the frontend state is updated immediately without a full page reload.
   - When users are created or updated, the app seamlessly redirects to the home page, fetching the latest data.
3. **Basic Error Handling**:
   - **Server-side**: API routes contain `catch` blocks that catch database or processing errors, returning a proper HTTP 500 status code with the error message.
   - **Client-side**: Frontend components (`Users`, `CreateUser`, `UpdateUser`) now contain error state handling. If a request fails, a helpful error message is rendered directly on the UI using Bootstrap alert boxes.

## Prerequisites
- Node.js installed
- MongoDB running locally on `mongodb://127.0.0.1:27017/crud`

## How to Run

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`
3. Start the server: `node index.js` (Server runs on port 3001)

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

The application allows you to Add, View, Update, and Delete users seamlessly.

## Deployment to Vercel

### 1. Backend Deployment (Vercel)
1. Push your code to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) and create a new project.
3. Import your GitHub repository.
4. Set the **Root Directory** to `backend`.
5. In the Environment Variables section, add your MongoDB connection string:
   - Key: `MONGODB_URI`
   - Value: `mongodb+srv://<username>:<password>@cluster.mongodb.net/crud` (Use MongoDB Atlas)
6. Click **Deploy**. Vercel will use the `vercel.json` file automatically.
7. Once deployed, copy the **Backend URL** (e.g., `https://my-backend.vercel.app`).

### 2. Frontend Deployment (Vercel)
1. Go back to your Vercel dashboard and create another new project.
2. Import the exact same GitHub repository again.
3. This time, set the **Root Directory** to `frontend`.
4. Ensure the Framework Preset is set to **Vite**.
5. In the Environment Variables section, add your Backend URL:
   - Key: `VITE_API_URL`
   - Value: `https://my-backend.vercel.app` (The URL from step 7)
6. Click **Deploy**.

Your full MERN stack application is now live on Vercel!
