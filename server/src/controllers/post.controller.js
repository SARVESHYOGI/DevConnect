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

export async function getpost(req, res) {
  try {
    const posts = await Post.find().populate("user", "username");
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
  }
}

export async function getpostbyid(req, res) {
  try {
    const { id } = req.params;
    const post = await Post.findById(id).populate("user", "username");
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json({ post });
  } catch (error) {
    console.error(error);
  }
}
