import mongoose from "mongoose";
const { Schema, model } = mongoose;
import db from "../config/db.js";

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

const User = model('User', UserSchema);
export default User;