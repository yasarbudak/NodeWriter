# NodeWriter

A simple and modular user management system built with Node.js and Express.js. NodeWriter provides basic CRUD (Create, Read, Update, Delete) operations for managing users, making it an excellent starting point for learning RESTful API development. 🚀

## Features
- User registration, listing, updating, and deletion.
- Modular project structure with organized routes, controllers, and models.
- JSON-based temporary database for simplicity.
- Fully tested with Postman.
- Clean and beginner-friendly codebase.

## Project Structure
```
NodeWriter/
├── controllers/
├── models/
├── routes/
├── server.js
├── package.json
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yasarbudak/NodeWriter.git
   cd NodeWriter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the server:
   ```bash
   node server.js
   ```

## API Endpoints

### Base URL: `http://localhost:3000`

- **POST** `/users/register` - Register a new user
- **GET** `/users/list` - Get all users
- **PUT** `/users/update/:id` - Update user by ID
- **DELETE** `/users/delete/:id` - Delete user by ID

## Example Request

**POST** `/users/register`
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

## License
This project is open-source and free to use.
