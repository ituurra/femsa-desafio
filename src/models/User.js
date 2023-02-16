import { Schema, model } from 'mongoose'
const user = new Schema({
    username: String,
    email: String,
    password: String
}, {
    timestamps: true,
    versionKey: false
})

export default model("User", user);