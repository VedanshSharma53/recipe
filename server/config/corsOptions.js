const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Allow credentials if needed
  optionsSuccessStatus: 200,
  allowedHeaders: ["Content-Type", "Authorization"], // Explicitly allow headers
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
};

module.exports = corsOptions;
