// Purpose of this file

// First point of entry
    // Initialise the server
    // Get the Port
    // Tell the server to listen to incoming traffic

// Server is configured in this file
const { app } = require("./server.js");
const { dbConnect } = require("./utils/database.js");

// Get the PORT
const PORT = process.env.PORT || 3000;

// First way to connect to DB and listen to the port
// dbConnect().then(() => {
//     app.listen();
// });

// Second way to Listen to the PORT and connect to DB
app.listen(PORT, async () => {
    // Server is running at this point
    await dbConnect();

    console.log("Server is running on port: " + PORT);
})