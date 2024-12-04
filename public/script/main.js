//  Bonus plus plus plus

const section = document.getElementById("section");

const ajouterMessage = (message) => {
    const newP = document.createElement("p");
    newP.innerHTML = message;
    section.appendChild(newP);
};

//  Description des patients :

class Patiens {
    constructor (nom, maladie, argent, poche, état){
        this.nom = nom
        this.maladie = maladie
        this.argent = argent
        this.poche = poche
        this.état = état
    }
}

let Marcus = new Patiens ("Marcus", "mal indenté", 100, [], "malade")
let Optimus = new Patiens ("Optimus", "unsave", 200, [], "malade")
let Sangoku = new Patiens ("Sangoku", "404", 80, [], "malade")
let DarthVader = new Patiens ("DarthVader", "azmatique", 110, [], "malade")
let Semicolon = new Patiens ("Semicolon", "syntaxError", 60, [], "malade")

// Description du docteur :



