import mongoose, { Schema } from "mongoose";

export interface IComment {
  user: string;
  comment: string;
  time: Date;
}

// typescript type (can also be an interface)
type Blog = {
  title: string;
  slug: string;
  date: Date;
  image: string;
  imageAlt: string;
  description: string; // for preview
  content: string; // for individual blog page
  comments?: IComment[]; // array for comments
};

// mongoose schema
const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, required: false, default: new Date() },
    },
  ]
});

// defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
