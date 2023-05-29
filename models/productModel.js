import { model, models, Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    category: {
      required: true,
      default: false,
    },
    inStock: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

let Dataset = models.product || model("product", ProductSchema);

export default Dataset;
