import mongoose from "mongoose";    

const userAuth = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, "name is required"],
            maxLength: [50, "name should must less than 50 char"]
        }
    }
)