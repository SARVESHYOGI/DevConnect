import Post from "../models/post.models";

export async function createPost(req, res) {
  try {
    const { user, title, content } = req.body;
    const newPost = new Post({ user, title, content });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}


