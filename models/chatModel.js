const mongoose=require('mongoose')

const chatSchema=  mongoose.Schema({
    sender_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    receiver_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    message:{
        type:String,
        required:true
    }
},
{timesTamps:true}
)
module.exports = mongoose.model("Chat",chatSchema)