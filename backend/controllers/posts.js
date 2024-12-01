import Post from "../models/posts"

export const getPosts = async (req, res) => {
    try {
        const post = await Post.find()
        res.status(200).json(post)
        console.log('Post got successfully!')
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const createPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}