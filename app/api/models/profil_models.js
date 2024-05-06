const mongoose = require('mongoose')

const Profil = new mongoose.Schema({
    users_id:{type:mongoose.Schema.ObjectId ,required:true,unique:true},
    nom:{type:String,required:true},
    prenom :{type:String,required:true},
    jour_naissance:{type:String,required:true},
    date_inscription:{type:String,required:true},
    style_film:[
        {
            type: mongoose.Schema.ObjectId,
            ref: 'TypeFilm_collections'
        }
    ]
})

module.exports =mongoose.model('Profil_collections',Profil)