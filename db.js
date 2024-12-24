const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/";

const connectDb = async () => {
    await mongoose.connect(mongoURI);
    console.log("Connected to db successfully...");
}

module.exports = connectDb;
