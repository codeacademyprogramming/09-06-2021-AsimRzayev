const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.ATLAS_URI;

const connectDB = async () => {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
    });
    console.log("MongoDB connected");
};
module.exports = connectDB;
