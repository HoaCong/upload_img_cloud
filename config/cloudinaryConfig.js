const cloudinary = require("cloudinary");
require("dotenv").config();

cloudinary.v2.config({
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

module.exports = cloudinary;
