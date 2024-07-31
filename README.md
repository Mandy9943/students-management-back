# Student Management Backend Service

This is the backend service for a student management system, built with Express.js, TypeScript, Prisma, and SQLite.

## Prerequisites

- Node.js (v18 or later)
- Yarn package manager

## Getting Started

1. Clone the repository:
   
   git clone https://github.com/Mandy9943/students-management-back
   cd students-management-back
   

2. Install dependencies:
   
   yarn install
   

3. Set up the environment variables:
   Create a `.env` file in the root directory and add the following:
   
   PORT=5050
   

4. Set up the database:
   
   npx prisma migrate dev
   

5. Start the development server:
   
   yarn dev
   

The server will start running on `http://localhost:3000` (or the port specified in your `.env` file).

## Scripts

- `yarn dev`: Start the development server with hot-reloading
- `yarn build`: Build the TypeScript code
- `yarn start`: Start the production server
- `yarn lint`: Run ESLint
- `yarn test`: Run tests


## Database

This project uses SQLite as the database, with Prisma as the ORM. The database schema is defined in `prisma/schema.prisma`.

To update the database schema:

1. Modify the `schema.prisma` file
2. Run `npx prisma migrate dev --name your_migration_name`
3. Run `npx prisma generate` to update the Prisma client

