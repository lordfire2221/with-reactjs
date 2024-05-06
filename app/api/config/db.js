const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jeaneudestchibozo:3sxf53ZQB5hHsMVw@cluster0.czb7bsq.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion MongoDB:'));
db.once('open', function() {
  console.log('Connecté à la base de données MongoDB');
});
module.exports = db;
