const mongoose = require("mongoose");

const connectDB = function() {
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("mongoDB connection is successfull"))
    .catch((err) => console.log(err));
}


module.exports = connectDB;
