import mongoose from "mongoose";
 const messageSchema = new mongoose.Schema ({
    msg:{
        type: String,
        required: true
    }
})

export const Msg = mongoose.model ('msg', messageSchema);