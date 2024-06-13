# Tripfusion

Tripfusion is a comprehensive platform that offers various services such as booking flights, hotels, and taxis. The backend is built using Node.js and a MySQL database, following a microservice-based architecture.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Contact](#contact)

## Project Structure

Tripfusion is composed of four distinct microservices:

1. **AuthService**: Handles user authentication.
2. **ServicesService**: Manages flights, hotels, and taxis.
3. **BookingService**: Handles the booking process for flights, hotels, and taxis.
4. **ReminderService**: Sends reminder when bookings are made.


## Installation

### Prerequisites

- Node.js (v18.16.0)
- MySQL (V8.0.34)
- Any other dependencies or tools

### Steps to Set Up the Project Locally

1. Clone the repository:

   git clone https://github.com/Moiz081/TripFusion.git


2. Navigate to the project directory:

   cd tripfusion

3. Install dependencies for each service:

   cd ../AuthService

   npm install
   
   cd ../ServicesService
   
   npm install

   cd ../BookingService
   
   npm install

   cd ../ReminderService
   
   npm install
   
5. Set up the MySQL database and update the configuration files with your database credentials.

6. Start each service:

   cd ../AuthService
   
   npm start

   cd ../ServicesService

   npm start

   cd ../BookingService

   npm start

   cd ../ReminderService

   npm start

   
## Usage
Running the Services
Ensure all services are running by starting each service individually as shown in the installation steps.

Environment Variables
Inside the src/config folder create a new file config.json and then add the following piece of json
For example:

env

PORT=your_port_number

DB_HOST=your_database_host

DB_USER=your_database_user

DB_PASS=your_database_password

DB_NAME=your_database_name

JWT_SECRET=your_jwt_secret

Once you've added your db config as listed above, go to the src folder from your terminal and execute 
`npx sequelize db:create` and then execute
`npx sequelize db:migrate`


## Contribute
We welcome contributions to Tripfusion! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -m 'Add your feature').
4. Push to the branch (git push origin feature/your-feature).
5. Open a pull request.


## Contact
For support or inquiries, please contact me at:

Email: moizmd066@gmail.com

linkedIn: http://bit.ly/3xkmeqf

