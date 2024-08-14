

# Blog Website

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The Blog Website is a full-stack web application that allows users to create, read, update, and delete blog posts. The application is built using modern web technologies including HTML, CSS, JavaScript for the front-end, and Node.js with MongoDB for the back-end. The project supports user authentication, post management, and a responsive design.

## Features
- **User Authentication**: Users can sign up, log in, and manage their profiles.
- **CRUD Operations**: Create, read, update, and delete blog posts.
- **Responsive Design**: The website is designed to be responsive and accessible on various devices.
- **Image Uploads**: Supports adding images to blog posts (optional feature).
- **Admin Functionality**: Basic administrative control over content and users.

## Technologies Used
- **Front-End**:
  - HTML
  - CSS (with a custom stylesheet: `styles.css`)
  - JavaScript
- **Back-End**:
  - Node.js
  - Express.js
- **Database**:
  - MongoDB (via Mongoose)
- **Templating**:
  - EJS (Embedded JavaScript)

## Project Structure
```
Blog-Website/
│
├── models/
│   └── post.js               # Mongoose model for blog posts
│
├── public/
│   ├── css/
│   │   └── styles.css        # Custom CSS styles
│   └── image/
│       ├── banner4-Photoroom.png
│       └── bg5.jpg           # Images used in the project
│
├── routes/
│   └── index.js              # Route definitions for the application
│
├── views/
│   ├── index.ejs             # Home page template
│   ├── layout.ejs            # Layout template for the website
│   ├── new-post.ejs          # Template for creating a new post
│   └── post.ejs              # Template for viewing a single post
│
├── Blog.mp4                  # Video demonstration of the project
├── app.js                    # Main application file
├── package-lock.json         # Automatically generated for dependencies
├── package.json              # Project dependencies and scripts
├── run application.txt       # Instructions to run the application
└── README.md                 # Project documentation (this file)
```

## Installation

### Prerequisites
- Node.js (v12+)
- MongoDB (local instance or MongoDB Atlas)
- Git (optional, for version control)

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/blog-website.git
   cd blog-website
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```bash
   PORT=3000
   MONGO_URI=your_mongo_db_uri
   SESSION_SECRET=your_session_secret
   ```

4. **Run the Application**:
   Follow the steps provided in the `run application.txt` file:
   ```bash
   npm start
   ```
   The application will start running at `http://localhost:3000`.

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Sign up or log in to create, edit, or delete blog posts.
3. View existing posts, search content, and interact with the platform.

## API Endpoints

### Authentication
- `POST /login` - Log in a user
- `POST /register` - Register a new user
- `GET /logout` - Log out the current user

### Blog Posts
- `GET /posts` - Retrieve all blog posts
- `GET /posts/:id` - Retrieve a specific blog post by ID
- `POST /posts` - Create a new blog post
- `PUT /posts/:id` - Update an existing blog post
- `DELETE /posts/:id` - Delete a blog post

## Contributing
Contributions are welcome! If you have any ideas for improvements or new features, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This README is tailored to your specific project structure and provides clear guidance on how to set up, run, and contribute to the project. You can modify it further if there are any additional features or specifics you'd like to include.
