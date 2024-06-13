# Welcome to Authentication Service 

## Project setup

- Clone the project on your local machine.
- Run "npm install" in root directory of the project.
- Create .env file in project root directory and add following environmental variable:
    PORT=6001

- Inside config folder create config.json and add the following piece of code:

"development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Auth_db_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

- Once you've added your db config change the directory to src folder using terminal and execute the below cmd
    `npx sequelize db:create`

- After creation of the db in your mysql db execute below command
    `npx sequelize db:migrate`

## Base Url - {API_URL}/api

#### User Authentication
- POST /signup
- POST /signIn
- GET /isAuthenticated

#### User Authorization
- GET /isAdmin
- GET /isCustomer/:id