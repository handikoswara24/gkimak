import { IImageModel } from "@/types/image";
import mongoose, { Schema } from "mongoose";

const imageModel = new mongoose.Schema({
    cloudinaryid : {
        type: String,
    },
    url: {
        type: String,
    }
}, {
    timestamps: true
});

const ImageModel = mongoose.models.ImageModel ?? mongoose.model<IImageModel>("ImageModel", imageModel);
export default ImageModel;