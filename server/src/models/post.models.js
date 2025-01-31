import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
