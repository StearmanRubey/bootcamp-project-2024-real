import mongoose, { Schema } from "mongoose";

type Portfolio = {
  title: string;
  slug: string;
  image: string;
  imageAlt: string;
  description: string;
};

// mongoose schema
const portfolioSchema = new Schema<Portfolio>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  description: { type: String, required: true },
});

// defining the collection and model
const Portfolio = mongoose.models["portfolios"] || mongoose.model("portfolios", portfolioSchema);

export default Portfolio;
