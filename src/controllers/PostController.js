const { PostModel } = require("../models/PostModel")


// Provide CRUD functionality for the PostModel
async function createPost(title, content) {
    let result = await PostModel.create({
        title: title,
        content: content
        // Date has a default value
    });

    return result;
}

async function getPost(query) {
    let result = await PostModel.findOne(query);

    return result;
}

async function getPosts() {
    let result = await PostModel.find(query);

    return result;

}

async function updatePost() {}

async function deletePost() {}


module.exports = {
    createPost, getPost, getPosts, updatePost, deletePost
}

