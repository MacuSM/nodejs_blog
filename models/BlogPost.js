const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlongPostSchema = new Schema({
    title: String
    body: String
});

const BlogPost = mongoose.model('BlogPost','BlogPostSchema');
module.exports = BlogPost