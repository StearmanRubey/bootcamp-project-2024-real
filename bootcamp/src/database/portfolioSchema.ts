import mongoose, { Schema, Document } from "mongoose";

export interface IComment extends Document {
  user: string;
  comment: string;
  time: Date;
}

type Portfolio = {
  title: string;
  slug: string;
  image: string;
  imageAlt: string;
  description: string;
  comments: IComment[];
};

// mongoose schema
const portfolioSchema = new Schema<Portfolio>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  description: { type: String, required: true },
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, required: false, default: new Date() },
    },
  ]
});

// defining the collection and model
const Portfolio = mongoose.models["portfolios"] || mongoose.model("portfolios", portfolioSchema);

export default Portfolio;
