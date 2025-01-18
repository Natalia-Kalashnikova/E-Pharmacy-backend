# E-Pharmacy-backend

## Project Overview

**E-Pharmacy-backend** is the server-side application that supports the E-Pharmacy client application. It provides the API endpoints and handles the backend logic for authentication, data storage, and communication with the database.

Frontend repository: [E-Pharmacy Client](https://e-pharmacy-client-five.vercel.app/)

## Key Features

- **API Endpoints**:
  Provides a set of endpoints to handle requests from the frontend, including user login, data retrieval, and saving operations.

- **Authentication and Authorization**:
  Ensures secure user authentication and authorization for protected resources and operations.

- **Data Storage**:
  Designed to manage data models and database structure for boards, columns, and cards. It supports operations such as create, read, update, and delete (CRUD).

- **Data Validation**:
  Validates incoming data to maintain correctness and consistency before saving to the database. Handles errors and invalid input gracefully.

- **Request Handling**:
  Processes frontend requests such as creating new boards, adding columns, or updating cards, and executes appropriate backend actions.

- **Database Integration**:
  Connects seamlessly with the database to execute queries for storing, retrieving, and updating data.

## Technologies Used

The project utilizes the following technologies and dependencies:

- **bcrypt / bcryptjs**: For password hashing.
- **cookie-parser**: To parse cookies in requests.
- **cors**: For handling Cross-Origin Resource Sharing.
- **dotenv**: To manage environment variables.
- **express**: For building the server-side application.
- **handlebars**: For template rendering.
- **http-errors**: For handling errors.
- **joi**: For data validation.
- **jsonwebtoken**: For token-based authentication.
- **mongodb / mongoose**: For database management and modeling.
- **multer**: For handling file uploads.

## Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js**
- **npm**
- **MongoDB**

### Installation and Setup

1. **Clone the repository**

   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the project directory**
   ```bash
   cd E-Pharmacy-backend
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Set up environment variables**
   Create a .env file in the root directory and define the necessary variables, such as database connection URL, JWT secret, etc.

5. **Start the development server**
   ```bash
   npm run dev
   ```
6. **Run code linting**
   ```bash
   npm run lint
   ```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
