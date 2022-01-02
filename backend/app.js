const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
// const dotenv = require("dotenv");
const path = require("path");

const errorMiddleware = require("./middlewares/errors");

//..................
// dotenv.config({ path: "backend/config/config.env" });
if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").config({ path: "backend/config/config.env" });

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

// import all routes
const products = require("./routes/product");
const auth = require("./routes/auth");
const order = require("./routes/order");

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use("/api/v1", order);

const __dirnamee = path.resolve();

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirnamee, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirnamee, "/frontend/build/index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

//Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
