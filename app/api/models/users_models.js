const mongoose = require('mongoose')

const Users = new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    permission:{type:Boolean,required:true},
})

module.exports =mongoose.model('Users_collections',Users)