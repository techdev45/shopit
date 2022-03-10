const app = require("./app");
const connectDatabase = require("./config/database");

const dotenv = require("dotenv");
const cloudinary = require("cloudinary");

//Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down the server due to unhandled promise exceptions");
  process.exit(1);
});

//setting up confiq file
// dotenv.config({ path: "backend/config/config.env" });

//setting up confiq file
if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").config({ path: "backend/config/config.env" });

// connecting to database
connectDatabase();

// setting up cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(
    `Server is started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode. `
  );
});

//Handle unhandled Promise Rejections
process.on("unhandlesRejection", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("shutting down the server due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
