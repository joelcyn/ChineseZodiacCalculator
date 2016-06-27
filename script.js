// Configuration de la base de données MongoDB.
var mongoose = require('mongoose');
var utilisateur = 'joel';
var mdp = 'joel@ds051534';
var adresse = '.mongolab.com:51534/les-grottes-de-kalte';
mongoose.connect('mongodb://' + utilisateur + ':' + mdp + adresse);



function scriptButton() {
    window.alert(firstname.value +" is a boss");
    console.log("Le prenom est " + firstname.value);
    console.log("Le nom est " + lastname.value);
    console.log("Sa waifu est " + waifu.value);
}

