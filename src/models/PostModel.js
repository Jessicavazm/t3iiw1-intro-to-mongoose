const mongoose = require("mongoose")

// Example of creating a Title Schema
// You can pass titleSchema into the title field in the example bellow
// const titleSchema = new mongoose.Schema({
//     type: String,
//     required: true,
//     minLength: 10
// });

// const simpleSchema = new mongoose.Schema(objDefiningDataRules, SchemaOptions);
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 10
    },
    content: String,
    date: {
        type: Date,
        default: Date.now()
    }
});

// Make a Model based on the schema
const PostModel = mongoose.model("Post", PostSchema);
// Mongoose automatically looks for a collection with the plural lowercase 'posts'

// Export the Model for accessibility in other parts of the code
module.exports = {
    PostModel
}