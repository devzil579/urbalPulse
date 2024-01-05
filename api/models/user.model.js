import mongoose from 'mongoose'

const userSchema = new  mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        
    }
},{timestamps:true});
 mongoose.model('User',userSchema)

export default mongoose.model('User',userSchema)