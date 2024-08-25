const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
require("./config/cloudinaryConfig"); // Import cấu hình Cloudinary
const corsOptions = require("./config/corsConfig"); // Import cấu hình CORS
const cors = require("cors"); // Import thư viện cors
const app = express();

// Sử dụng CORS với các tùy chọn cấu hình
app.use(cors(corsOptions));
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.send("Welcome to Upload Img Cloud");
});

app.post("/upload", upload.single("image"), (req, res) => {
  const file = req.file;

  cloudinary.uploader
    .upload_stream({ resource_type: "image" }, (error, result) => {
      if (error) {
        return res.status(500).json({ error: "Upload failed" });
      }
      res.json({ url: result.secure_url });
    })
    .end(file.buffer);
});

const port = process.env.PORT || 3001;
app.listen(port, () =>
  console.log(`Server started on http://localhost:${port}`)
);
