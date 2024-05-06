const mongoose = require('mongoose')

const Movie = new mongoose.Schema({
    type_film_id:{type:mongoose.Schema.ObjectId ,required:true,unique:true},
    nom:{type:String,required:true},
    description_film :{type:String,required:true},
    jour_sortie:{type:String,required:true},
    production:{type:String,required:true},
    acteur:[
        {
            nom:{type:String,required:true},
            prenom:{type:String,required:true},
        }
    ],
    path_images:{type:String,require:true}
})

module.exports =mongoose.model('Movie_collections',Movie)