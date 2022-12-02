import mongoose from "mongoose";    
import AuthRoles from "../utils/AuthRoles"
const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, "name is required"],
            maxLength: [50, "name should must less than 50 char"]
        }, 
        email:{
            type:String,
            required:[true, "email is required"],
            unique:true
        },
         password:{
            type:String,
            required:[true, "password is required"],
            minLength: [8, "password  must be atleast  8 charters"],
            select:false
        },
        roles:{
            type: String,
            enum: Object.values(AuthRoles),
            default:AuthRoles,
        },
        forgetPasswordToken:String,
        forgetPasswordExpery:Date
        
    },
    {
        timestamps:true
    }
)
export default  mongoose.model("User", userSchema)