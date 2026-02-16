# Simple Express Backend API

A minimal Node.js + Express server demonstrating basic RESTful routing, middleware usage, and CRUD operations using in-memory storage.

This project is built for learning how HTTP requests, routing, JSON parsing, and server state management work in Express.

---

## Tech Stack

- Node.js
- Express
- Nodemon (development)

---

## Installation

Clone the repository:

```bash
git clone <your-repo-url>
cd simple-back-end
```

Install dependencies:

```bash
npm install
```

(Optional) Install nodemon for development:

```bash
npm install --save-dev nodemon
```

---

## Running the Server

Start normally:

```bash
node server.js
```

Or with nodemon (if configured in package.json):

```bash
npm run dev
```

Server runs at:

```
http://localhost:8383
```

---

## Project Structure

```
.
├── server.js
├── package.json
└── README.md
```

---

## Data Model

The application uses an in-memory data store:

```js
let data = {
  users: ["Hello"]
};
```
Note: Data resets every time the server restarts.

---

## Middleware

```js
app.use(express.json());
```

This middleware allows the server to automatically parse incoming JSON request bodies so `req.body` works correctly in POST requests.

---

## Website Endpoints

### GET /

Returns HTTP 200 status.

---

### GET /homepage

Returns a simple HTML page with a link to the dashboard.

---

### GET /dashboard

Returns a basic HTML dashboard page.

---

## API Endpoints

### GET /api/data

Returns all stored users.

Example response:

```json
{
  "users": ["Hello"]
}
```

---

### GET /api/datastring

Returns the user data rendered inside HTML.

---

### POST /api/data

Creates a new user.

Headers:

```
Content-Type: application/json
```

Request Body Example:

```json
{
  "name": "moi"
}
```

Adds the user to the users array.

Response:

```
201 Created
```

---

### DELETE /api/data

Deletes the most recently added user using Array.pop().

Response:

```
203 Non-Authoritative Information
```

Recommended improvement: Use `204 No Content` for deletion success.

---

## 🔄 CRUD Mapping

| Operation | HTTP Verb | Route      |
|-----------|----------|------------|
| Create    | POST     | /api/data  |
| Read      | GET      | /api/data  |
| Delete    | DELETE   | /api/data  |

---

## 🛠 Possible Improvements

- Delete a specific user by name or ID
- Add PUT endpoint for updating users
- Add input validation and error handling
- Use proper RESTful status codes
- Connect to a database (PostgreSQL, MongoDB, etc.)
- Refactor into modular route files

---

## 🎯 Learning Objectives

This project demonstrates:

- Express server setup
- Routing with HTTP verbs
- Middleware usage
- Handling JSON request bodies
- Basic REST API structure
- In-memory state management

---

---

## Credits

This project was built while following the tutorial:

**Backend Full Course | NodeJS ExpressJS PostgreSQL Prisma & Docker**  
by Smoljames  
https://www.youtube.com/watch?v=9BD9eK9VqXA&t=1623s

The structure and foundational concepts were learned from this course.  
All implementation, modifications, and extensions in this repository were written independently for learning purposes.

