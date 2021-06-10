const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
connectDB();
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/auth", require("./routes/auth"));

app.use("/api/private", require("./routes/private"));
app.use(errorHandler);
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
