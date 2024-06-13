# Welcome to BookingService

## Project setup

- Clone the project on your local machine.
- Run "npm install" in root directory of the project.
- Create .env file in project root directory and add following environmental variable:
    PORT=6003
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

## API Endpoints

use Postman to test the API in local machine, you need to follow the steps below:

- Get the Postman app from here.
- Download the Postman collection file in folder "/data/postman_collection"
- Import the collection file in Postman
- Important: will be necessary to setup the enviroment with the "VARIABLE"=urlAPI and "INITIAL VALUE"=http://localhost:5000, for example.
- Remember: keep the Postman collection updated with the latest API endpoints.

### Base Url - {API_URL}/api

### Flight Booking
- POST /flightBooking
- GET /flightBooking/:id

### Hotel Booking
- POST /hotelBooking
- GET /hotelBooking/:id

### Taxi Booking
- POST /taxiBooking
- GET /taxiBooking/:id
