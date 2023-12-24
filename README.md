# Movie World

## Project Overview

The Movie World Backend project aims to develop a robust backend system for managing a movie platform where users can review movies, create watchlists, and interact with diverse movie-related content.

## Key Features

1. User Management:

2. Movie Management:

3. Review and Rating:

4. Watchlists:

5. Category Management:

6. Trailer Management:

## Technologies Used

- Nodejs, Express.js, Prisma, PostgreSQL, Zod, Jwt

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
4. `run project:` 

```bash
yarn start
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

## Postman Documenttaion for api endpoint: https://documenter.getpostman.com/view/27398089/2s9YkodgaU

## Api End Points

### Auth

- Registration: http://localhost:5000/api/v1/auth/registration (post)
- Login: http://localhost:5000/api/v1/auth/login (post)

- admin token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNTc5YzQ4Yi0xODQyLTQ2YjYtYTk3Yi0zNDA4ZDE3NDMxNmUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDI5ODMwNTQsImV4cCI6MTcwNTU3NTA1NH0.k5a-V10TuG6ip9LLM6yF4tDVlpxmMsyD2Ii68KcOLIE
- customer token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5YWY4YzkyZC1mMWU4LTQzMTMtOTRjNC03MWMxNGMxMzYwYWEiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE3MDI5OTIyMDksImV4cCI6MTcwNTU4NDIwOX0.XBfUpYZ_LSj6V-Cpq7sLnkuN9PIuKAo9WNSahTep3ME

### User

- get all: http://localhost:5000/api/v1/users (get)
- get single: http://localhost:5000/api/v1/users/dd667488-ecb3-49b6-8195-f8c15d1f5587 (get)
- update: http://localhost:5000/api/v1/users/dd667488-ecb3-49b6-8195-f8c15d1f5587 (patch)
- delete: http://localhost:5000/api/v1/users/dd667488-ecb3-49b6-8195-f8c15d1f5587 (delete)

### Category

- create: http://localhost:5000/api/v1/categories/create-category (post)
- get all: http://localhost:5000/api/v1/categories (get)
- get single: http://localhost:5000/api/v1/categories/c9964265-c04c-455f-bf36-1f6666c36a36 (get)
- update: http://localhost:5000/api/v1/categories/c9964265-c04c-455f-bf36-1f6666c36a36 (patch)
- delete: http://localhost:5000/api/v1/categories/c9964265-c04c-455f-bf36-1f6666c36a36 (delete)

### Trailer

- create: http://localhost:5000/api/v1/trailers/create-trailer (post)
- get all: http://localhost:5000/api/v1/trailers (get)
- get single: http://localhost:5000/api/v1/trailers/c9964265-c04c-455f-bf36-1f6666c36a36 (get)
- update: http://localhost:5000/api/v1/trailers/c9964265-c04c-455f-bf36-1f6666c36a36 (patch)
- delete: http://localhost:5000/api/v1/trailers/c9964265-c04c-455f-bf36-1f6666c36a36 (delete)

### Review & rating

- create: http://localhost:5000/api/v1/review&ratings/create-review&rating (post)
- get all: http://localhost:5000/api/v1/review&ratings (get)
- get single: http://localhost:5000/api/v1/review&ratings/18d4cec3-7111-4aca-8294-70fb47919a93 (get)
- update: http://localhost:5000/api/v1/review&ratings/18d4cec3-7111-4aca-8294-70fb47919a93 (patch)
- delete: http://localhost:5000/api/v1/review&ratings/18d4cec3-7111-4aca-8294-70fb47919a93 (delete)

### Movie

- create: http://localhost:5000/api/v1/movies/create-movie (post)
- get all: http://localhost:5000/api/v1/movies (get)
- get movie categoryId: http://localhost:5000/api/v1/movies/c9964265-c04c-455f-bf36-1f6666c36a36/category (get)
- get single: http://localhost:5000/api/v1/movies/e5a7a369-f342-4484-9bfd-bebb0b355c8c (get)
- update: http://localhost:5000/api/v1/movies/e5a7a369-f342-4484-9bfd-bebb0b355c8c (patch)
- delete: http://localhost:5000/api/v1/movies/e5a7a369-f342-4484-9bfd-bebb0b355c8c (delete)

### WatchList

- create: http://localhost:5000/api/v1/watchlist/create-watchlist (post)
- get all: http://localhost:5000/api/v1/watchlist (get)
- get single: http://localhost:5000/api/v1/watchlist/e5a7a369-f342-4484-9bfd-bebb0b355c8c (get)
- update: http://localhost:5000/api/v1/watchlist/e5a7a369-f342-4484-9bfd-bebb0b355c8c (patch)
- delete: http://localhost:5000/api/v1/watchlist/e5a7a369-f342-4484-9bfd-bebb0b355c8c (delete)

### Profile

- get profile: http://localhost:5000/api/v1/profile
