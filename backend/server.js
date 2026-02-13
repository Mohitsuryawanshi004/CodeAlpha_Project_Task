require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const urlRoutes = require("./routes/url.routes");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());


// MongoDB connection
mongoose.connect("mongodb+srv://bl:9TaY5FcYVCDgA8m3@mohit004.9ll51vj.mongodb.net/codealpha");

mongoose.connection.on("connected", () => {
  console.log("Database connected");
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB error:", err);
});

// Routes
app.use("/", urlRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
