import mongoose, { mongo } from "mongoose";
const questionSchema = new mongoose.Schema({
    subject: {
        type : String,
        required: true
    },
    questionText : {
        type: String,
        required: true
    }, 
    choices: {
        type: [String],
        required: true
    }, 
    correctAnswer: {
        type: String,
        required: true
    }
} , {timestamps: true})
export const Questions =  mongoose.model("Questions", questionSchema);