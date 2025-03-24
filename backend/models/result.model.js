import mongoose from "mongoose";
const resultSchema = new mongoose.Schema({
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }, 
        subject: {
            type : String,
            required: true
        }, 
        totalMarks: {
            type : Number,
            required: true
        }, 
        obtained: {
            type : Number,
            default : 0
        }
},{timestamps:true});
export const Results = mongoose.model("Results",resultSchema);