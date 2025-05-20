import mongoose from "mongoose";

const participentSchema = new mongoose.Schema({
    participent:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"

    }, 
    obtaiendMarks: {
        type :Number,
        default : 0
    }
})

const sessionSchema = new mongoose.Schema({
    sessionId: {
        type: String,
        required : true
    },
    participents:[
        participentSchema
    ],
    createdBy: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subject:{
        type: String,
        required: true
    }, 
    winner:{
        participentSchema,
        default: {}
    },
    totalMarks: {
        type: Number, 
        required : true
    },
    totalQuestion:{
        type: Number,
        default: 10
    },
    questionsList: [
       { type: mongoose.Schema.Types.ObjectId,
        ref: "Questions"}
    ]


},{timestamps:true});
export const Session = mongoose.model("Session",sessionSchema);