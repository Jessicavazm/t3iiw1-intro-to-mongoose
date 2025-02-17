// File to connect server to DB
const mongoose = require("mongoose");

// Function to connect to the DB
// process.env.npm_package_name fetches the folder name
async function dbConnect(){
    let databaseUrl = process.env.DATABASE_ULR || `mongodb://127.0.0.1:27017/${process.env.npm_package_name}`;

    await mongoose.connect(databaseUrl);
}

module.exports = {
    dbConnect
}