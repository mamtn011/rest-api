## Description

This project is a RESTful API built with Express.js, Prisma, and PostgreSQL. It provides endpoints to manage items in a collection named "items".

## Requirements

- Node.js
- PostgreSQL

## Setup Instructions

### 1. Create a PostgreSQL Database

1. Install PostgreSQL if not already installed.
2. Access your PostgreSQL server and create a new database

### 2. Setting up the Project

#### a. Clone the Repository

```bash
git clone repo_url
```

#### b. Configure Environment Variables

1. Create a .env file in the root of the project.
2. Add the following environment variables to the .env file.

```
PORT=any-local-port-you-wanna-run-this-project
DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"
```

#### c. Install Dependencies

```bash
npm install
```

#### d. Run Prisma Migrations

1. Ensure Prisma is configured to connect to your PostgreSQL database.
2. Run Prisma migrations to create database tables:

```bash
npx prisma migrate dev --name initials
```

This command will create necessary tables in PostgreSQL database based on Prisma schema.

### 3. Running the Project

#### a. Start the Server

```bash
npm start
# or for development (with nodemon)
npm run dev
```

#### b. Test the Endpoints

Here are the available endpoints:

- **GET /items:** Retrieve a list of all items.
- **GET /items/:id:** Retrieve a single item by its ID.
- **POST /items:** Create a new item.
- **PUT /items/:id:** Update an existing item by its ID.
- **DELETE /items/:id:** Delete an item by its ID.

**You can use Postman to interact these API endpoints with this workspace.**

[Postman Workspace Link](https://www.postman.com/lts999/workspace/api-assignment)
