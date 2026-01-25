import { IOptionsModel } from "@/types/options";
import mongoose from "mongoose";

const option = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Option =
  mongoose.models.Option ?? mongoose.model<IOptionsModel>("Option", option);
export default Option;
