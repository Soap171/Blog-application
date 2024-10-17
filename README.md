# MERN Stack Blog Application

A fully-featured blog application built using the MERN stack, featuring user authentication, blog management, and responsive design.

## Features

- **User Authentication**: Email verification, Google authentication, and JWT-based sessions.
- **Profile Management**: Users can update their profile with images, username, city, phone number, and email.
- **Blog Management**: Create, edit, and delete blogs. Search for blogs by name or keywords.
- **Comments**: Users can comment on and delete comments from blog posts.
- **Email Notifications**: Sends welcome emails, email verification, and password reset instructions using Mailtrap.
- **Responsive Design**: Built using Bootstrap 5 for mobile-friendly layouts.

## Tech Stack

- **Frontend**: React, Zustand (State Management), React Query (Data Fetching), Bootstrap 5
- **Backend**: Node.js, Express.js, MongoDB
- **Email Service**: Mailtrap for transactional emails
- **Authentication**: JWT, Google Authentication

## Prerequisites

- Node.js
- MongoDB (local instance or cloud-based)

## Getting Started

### Clone the repository

### Create a .env file in the root directory and set the following variables

### Install both server and client dependencies

### Start the Development Server

### Navigate to the client folder and start the React application

```bash
PORT = 8000
MONGO_URL = <Your MongoDB URI>
JWT_SECRET = "MERN-BLOG"
NODE_ENV = "production"
CLIENT_URL = http://localhost:3000
MAILTRAP_TOKEN = <Your Mailtrap Token>
MAILTRAP_ENDPOINT = send.api.mailtrap.io

npm install - to both server and client dependencies
npm run dev - to Start the Development Server
cd client -> npm start - to start the client react app












