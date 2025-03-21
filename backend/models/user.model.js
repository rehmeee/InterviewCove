import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },
}, { timestamps: true })

// save password before adding to the database
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();

})

// for password verification
userSchema.methods.ispasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

// genrate access token 
userSchema.methods.genrateAccessTokens = function(){
    return jwt.sign({
        _id: this._id, 
        username: this.name, 
        email: this.email
    }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    });
}
// genrate access token 
userSchema.methods.genrateRefreshTokens = function(){
    return jwt.sign({
        _id: this._id, 
        
    }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    });
}

export const User = mongoose.model("User", userSchema);