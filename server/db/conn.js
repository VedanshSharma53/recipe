const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = () => {
  return mongoose.connect(process.env.ATLASDB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

module.exports = connectDB;
