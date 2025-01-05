import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { IUser } from "@/types/user";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    role: {
        type: String
    }
})

userSchema.methods.matchPassword = async function (enteredPassword: any) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre<IUser>("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next()
});

const User = mongoose.models.User ?? mongoose.model<IUser>("User", userSchema);

export default User;