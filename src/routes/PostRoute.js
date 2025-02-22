const express = require("express");
const { getPost } = require("../controllers/PostController");

const router = express.Router();

// Create post

// Get One post by ID
router.get("/search/:postId", async (request, response) => {
    console.log("Getting post with ID: " + request.params.postId)
    
    let result = await getPost({_id: request.params.postId});
    console.log("Found it: " + result);

    response.json({
        data:result
    })
});

// Get all posts

// Get many posts

// Export all the routes
module.exports = router