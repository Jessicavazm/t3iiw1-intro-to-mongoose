// File to connect server to DB
const mongoose = require("mongoose");

// Function to connect to the DB
// process.env.npm_package_name fetches the folder name
async function dbConnect(){
    let databaseUrl = process.env.DATABASE_URL || `mongodb://127.0.0.1:27017/${process.env.npm_package_name}`;
    
    await mongoose.connect(databaseUrl);

    console.log("Database connected!")
    console.log(databaseUrl);
    
}

// Fn to disconnect the DB
async function dbDisconnect() {
    // await mongoose.disconnect();
    await mongoose.connection.close();
}

// Fn to drop the DB
async function dbDrop() {
    await mongoose.connection.db.dropDatabase();
}

module.exports = {
    dbConnect, dbDisconnect, dbDrop
};