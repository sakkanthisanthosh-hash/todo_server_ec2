// define ur model schema

import mongoose from "mongoose";

//todo document structure
const todoSchema = mongoose.Schema({
    todo:{
        type:String,
        required:true,
        unique:true
    }
})

// we r creating collections with name called todos with todoschema
const todoCollection=mongoose.model("task", todoSchema)

export default todoCollection;