# Setup

1. Install [Node.js](https://nodejs.org/en/download/) if you haven't already.
2. git clone https://github.com/sudip-gh/new-express-project.git
3. cd new-express-project
4. npm install && npx prisma generate 
5. npm run dev
6. Open http://localhost:3000/ in your browser.


# Routes

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET    | /        | Returns a JSON object with a message indicating that the server is running.
| GET    | /api/v1/category | Returns a JSON array of all categories.
| POST   | /api/v1/category | Creates a new category.
| GET    | /api/v1/category/:id | Returns a JSON object of the category with the specified ID.
| PUT    | /api/v1/category/:id | Updates the category with the specified ID.
| DELETE | /api/v1/category/:id | Deletes the category with the specified ID.
| POST   | /api/v1/auth/register | Registers a new user.
| POST   | /api/v1/auth/login | Logs in an existing user.

# About

This is a simple blog application built with Express.js and Prisma. It demonstrates how to use Prisma to create a database schema and CRUD operations on it.