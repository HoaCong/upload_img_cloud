const allowedDomains = process.env.ALLOWED_DOMAINS
  ? process.env.ALLOWED_DOMAINS.split(",")
  : [];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedDomains.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // Cho phép yêu cầu nếu domain nằm trong danh sách
    } else {
      callback(new Error("Not allowed by CORS")); // Chặn yêu cầu nếu domain không nằm trong danh sách
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

module.exports = corsOptions;
