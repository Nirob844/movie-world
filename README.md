# Movie World

## Project Overview
The Movie World Backend project aims to develop a robust backend system for managing a movie platform where users can review movies, create watchlists, and interact with diverse movie-related content. 

## Key Features
1.	User Management:

2.	Movie Management:

3.	Review and Rating:

4.	Watchlists:

5.	Category Management:

6.	Trailer Management:

## Technologies Used
-	Nodejs, Express.js, Prisma, PostgreSQL, Zod, Jwt


## Installation Steps

### Follow these steps to clone and set up starter project:

1. `Clone the project:` Open your terminal or command prompt and run the following command to clone the project repository:

```bash
git clone https://github.com/Nirob844/movie-world.git
```

2. `Navigate into the project directory:` Use the cd command to navigate into the project directory:

```bash
cd movie-world
```

3. `Install project dependencies:` Next, install the project dependencies by running the following command:

```bash
yarn install
```

- Create a .env file in the project root directory and set the DATABASE_URL environment variable. Replace the placeholders with your database connection and json web token :

- .env

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
NODE_ENV=development
PORT=5000
JWT_SECRET='very-secret'
JWT_EXPIRES_IN=30d
JWT_REFRESH_SECRET='very-refresh-secret'
JWT_REFRESH_EXPIRES_IN=365d
```
### Postman Documenttaion for api endpoint: https://documenter.getpostman.com/view/27398089/2s9YkodgaU



