const mongoose =require("mongoose")

const mongschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    followers:[],
    following:[]
})

mongoose.model("user",mongschema)