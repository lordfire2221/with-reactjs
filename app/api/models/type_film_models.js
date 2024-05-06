const mongoose = require('mongoose')

const TypeFilm = new mongoose.Schema({
    nom:{type:String,required:true},
    description :{type:String,required:true},
})

module.exports =mongoose.model('TypeFilm_collections',TypeFilm)