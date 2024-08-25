# Image Upload Server with Cloudinary

This project provides a server-side implementation for uploading images to Cloudinary cloud storage using Node.js and Express. It serves as a boilerplate for anyone looking to implement a similar functionality in their web application.

## Features

- Upload images to Cloudinary cloud storage.
- Support for multiple image formats.
- Easy-to-use API endpoints.
- Environment variable configuration for security and flexibility.

## Technologies Used

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Web framework for Node.js, providing a robust set of features for web and mobile applications.
- **Cloudinary**: Cloud-based service that provides an end-to-end image and video management solution.
- **Multer**: Node.js middleware for handling `multipart/form-data`, primarily used for uploading files.
- **dotenv**: Module for loading environment variables from a `.env` file.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher)

### Cloudinary Setup

1. Create a [Cloudinary account](https://cloudinary.com/users/register/free).
2. Obtain your Cloudinary credentials (Cloud name, API Key, API Secret).
3. Store these credentials in a `.env` file in the root directory of your project as follows:

   ```plaintext
   CLOUDINARY_CLOUDINARY_CLOUD_NAME=your_CLOUDINARY_CLOUD_NAME
   CLOUDINARY_CLOUDINARY_API_KEY=your_CLOUDINARY_API_KEY
   CLOUDINARY_CLOUDINARY_API_SECRET=your_CLOUDINARY_API_SECRET
   ALLOWED_DOMAINS=allowed_domain_access_call_api
   ```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo-name
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

### Running the Server

1. Start the server:

   ```bash
   npm start
   ```

2. The server will run on `http://localhost:3000` by default.

### API Endpoints

- **POST /upload**

  Uploads an image to Cloudinary.

  - **Request Body**: `multipart/form-data` with an image file.
  - **Response**:
    - `200 OK`: Image uploaded successfully. Returns the URL of the uploaded image.
    - `400 Bad Request`: No image file provided or invalid image format.
    - `500 Internal Server Error`: An error occurred during the upload process.

  Example using `curl`:

  ```bash
  curl -X POST -F "image=@/path/to/your/image.jpg" http://localhost:3000/upload
  ```

### Folder Structure

```plaintext
├── config/
│   └── cloudinaryConfig.js   # Cloudinary configuration
|   └── cors.js               # Cors configuration
├── .env                      # Environment variables
├── server.js                 # Main application file
├── package.json              # Project metadata and dependencies
└── README.md                 # Project documentation
```
