import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: false
    },
    selectedFile: {
        type: String,
        required: true
    },
    likeCount: {
        type: Number,
        required: false,
        default: 0
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date()
    }
})

const Post = mongoose.model('Post', blogSchema);