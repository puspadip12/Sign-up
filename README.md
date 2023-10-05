# Registration Form Node.js App

A simple Node.js application for handling user registration forms and storing data in a MySQL database.

<img width="1468" alt="Screenshot 2023-10-05 at 10 51 16 AM" src="https://github.com/puspadip12/Sign-up/assets/73663889/2bd82acc-9d3d-4449-b113-9f443cbc9dae">


## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Database](#database)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- MySQL database server running
- npm (Node Package Manager) installed
- MySQL database named 'REGISTRATION' created

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd registration-form-nodejs
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Configure your MySQL database connection by editing `app.js`:

   ```javascript
   const db = mysql.createConnection({
     host: 'localhost',
     user: 'your-mysql-username',
     password: 'your-mysql-password',
     database: 'REGISTRATION',
     insecureAuth: true,
   });
   ```

2. Make sure your MySQL server is running and the 'REGISTRATION' database exists.

## Usage

1. Start the Node.js server:

   ```bash
   npm start
   ```

2. Access the registration form in your web browser at `http://localhost:8080/register`.

## Endpoints

- `GET /register`: Display the registration form.
- `POST /register`: Handle registration form submissions and insert user data into the database.

## Database

This application uses a MySQL database to store user registration data. Be sure to create the necessary table (e.g., `reg`) with appropriate columns (e.g., `username`, `name`, `email`, `password`).

## Contributing

Contributions are welcome! If you find any issues or want to improve the project, please open a pull request or submit an issue.

