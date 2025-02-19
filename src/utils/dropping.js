// Drop DB

const { dbConnect, dbDisconnect, dbDrop } = require("./database");

// Any DB operations is ASYNC
async function drop() {
    // await dbConnect();
    await dbDrop();

    await dbDisconnect();

    console.log('Disconnected!');
}

// seed();

dbConnect().then(() => {
    console.log("Connected to the DB. Dropping now...");
    drop();
})

