import mongoose from "mongoose";


const chatSchema=new mongoose.Schema({
        id:{type:String},
        role:{type:String,required:true},
        content:{type:String,required:true}

})

const userSchema=new mongoose.Schema({
 name:{type:String,required:true},
 email:{type:String,required:true},
 password:{type:String,required:true},
 chats:[chatSchema]

})


const userModel= mongoose.models.user||mongoose.model('user',userSchema)
export default userModel