// Function to seed the DB

const { createPost, getPost } = require("../controllers/PostController");
const { dbConnect, dbDisconnect } = require("./database");

// Any DB operations is ASYNC
async function seed() {
    await dbConnect();
    console.log("Connected to the DB. Seeding now...");

    await createPost("Important Post", "This is really important!");

    let getPostResult = await getPost({title: "Important Post"});
    console.log(getPostResult);

    console.log("Seeding complete. Disconnecting...");

    await dbDisconnect();

    console.log("Disconnected!")
}

seed();


// dbConnect().then(() => {
//     console.log("Connected to the DB. Seeding now...");
//     seed();
// })

