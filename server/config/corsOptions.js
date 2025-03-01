const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin:["https://recipe-backend-two.vercel.app","https://recipe-livid-omega.vercel.app"],
  credentials: true,  // Allow cookies/session tokens
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200,
};


module.exports = corsOptions;
