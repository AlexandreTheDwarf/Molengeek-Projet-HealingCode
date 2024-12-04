// Bonus plus plus plus
const section = document.getElementById("section");
const audio = document.getElementById("myAudio");

// Fonction pour ajouter un message dans la section
const ajouterMessage = (message) => {
    const newP = document.createElement("p");
    newP.innerHTML = message;
    section.appendChild(newP);
};

// Mise à jour de l'affichage des lieux
const mettreAJourTableau = (lieu, tableau) => {
    const element = document.getElementById(lieu);
    element.innerHTML = tableau.map(patient => `<li>${patient.nom}</li>`).join("");
};

// Classe des patients
class Patients {
    constructor(nom, maladie, argent, poche, état) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.état = état;
    }

    seRendre(endroit, tableauDeDepart, tableauDArrivee) {
        const index = tableauDeDepart.indexOf(this);
        if (index !== -1) tableauDeDepart.splice(index, 1); // Retirer du tableau de départ
        tableauDArrivee.push(this); // Ajouter au tableau d'arrivée

        ajouterMessage(`${this.nom} se rend à ${endroit}.`);
        mettreAJourTableau("salle-attente", SalleAttente);
        mettreAJourTableau("cabinet", doctor.cabinet);
        mettreAJourTableau("pharmacie", Pharmacie);
        mettreAJourTableau("cimetière", Cimetière);
    }

    prendreMedicament() {
        if (this.poche.length > 0) {
            const medicament = this.poche.pop();
            ajouterMessage(`${this.nom} prend le traitement : ${medicament}.`);
            this.état = "guéri";
        } else {
            ajouterMessage(`${this.nom} n'a pas de médicament.`);
        }
    }

    payer(montant) {
        if (this.argent >= montant) {
            this.argent -= montant;
            ajouterMessage(`${this.nom} paie ${montant}€. Il lui reste ${this.argent}€.`);
            return true;
        } else {
            ajouterMessage(`${this.nom} n'a pas assez d'argent pour payer ${montant}€.`);
            return false;
        }
    }
}

// Création des patients
let Marcus = new Patients("Marcus", "mal indenté", 100, [], "malade");
let Optimus = new Patients("Optimus", "unsave", 200, [], "malade");
let Sangoku = new Patients("Sangoku", "404", 80, [], "malade");
let DarthVader = new Patients("DarthVader", "azmatique", 110, [], "malade");
let Semicolon = new Patients("Semicolon", "syntaxError", 60, [], "malade");

// Lieux
let SalleAttente = [Marcus, Optimus, Sangoku, DarthVader, Semicolon];
let Pharmacie = [];
let Cimetière = [];

// Description du docteur
let doctor = {
    nom: "Debugger",
    argent: 0,
    cabinet: [
    ],

    accueillir(patient) {
        ajouterMessage(`${this.nom} accueille ${patient.nom} dans son cabinet.`);
        this.cabinet.push(patient);
        mettreAJourTableau("cabinet", this.cabinet);
    },

    diagnostiquer(patient) {
        const maladies = {
            "mal indenté": "ctrl+maj+f",
            "unsave": "saveOnFocusChange",
            "404": "CheckLinkRelation",
            "azmatique": "Ventoline",
            "syntaxError": "f12+doc",
        };

        const traitement = maladies[patient.maladie];
        if (traitement) {
            ajouterMessage(`${this.nom} diagnostique ${patient.nom} : ${patient.maladie}.`);
            patient.poche.push(traitement);
        } else {
            ajouterMessage(`${this.nom} ne sait pas comment traiter ${patient.nom}.`);
        }
    },

    facturer(patient, montant = 50) {
        if (patient.payer(montant)) {
            this.argent += montant;
            ajouterMessage(`${this.nom} reçoit ${montant}€. Total : ${this.argent}€.`);
        }
    },

    soigner(patient) {
        patient.état = "en traitement";
        ajouterMessage(`${this.nom} soigne ${patient.nom}, état actuel : ${patient.état}.`);
        this.diagnostiquer(patient);
        this.facturer(patient);
    },

    faireSortir(patient) {
        ajouterMessage(`${this.nom} fait sortir ${patient.nom} du cabinet.`);
        this.cabinet = this.cabinet.filter(p => p !== patient);
        mettreAJourTableau("cabinet", this.cabinet);
    }
};

// Pharmacie
const pharmacie = {
    traitements: {
        "ctrl+maj+f": 60,
        "saveOnFocusChange": 100,
        "CheckLinkRelation": 35,
        "Ventoline": 40,
        "f12+doc": 20,
    },

    accueillir(patient) {
        ajouterMessage(`Bienvenue à la pharmacie, ${patient.nom} !`);
        const traitement = patient.poche[0]; // Récupère le traitement dans la poche
    
        if (traitement) {
            const prix = this.traitements[traitement];
            if (patient.payer(prix)) {
                ajouterMessage(`${patient.nom} achète ${traitement} pour ${prix}€.`);
                patient.prendreMedicament();
                if (patient.état === "guéri") {
                    ajouterMessage(`${patient.nom} est guéri et quitte la pharmacie.`);
                    patient.seRendre("dehors", Pharmacie, []);
                }
            } else {
                // Utilisation de cimetière.ajouterPatient pour gérer l'annonce
                cimetière.ajouterPatient(patient, traitement, prix);
                patient.seRendre("cimetière", Pharmacie, Cimetière);
            }
        } else {
            ajouterMessage(`${patient.nom} n'a pas de traitement à acheter.`);
        }
    }    
};

// Cimetière
const cimetière = {
    ajouterPatient(patient, traitement, prix) {
        ajouterMessage(
            `⚰️ Annonce nécrologique : ${patient.nom} est décédé faute de moyens pour acheter ${traitement} à ${prix}€.`
        );
    }
};

// Chat miaulant toutes les 2 secondes
let chat = {
    nom: "chat",
    intervalle: null, // Variable pour garder la référence de l'intervalle

    miauler() {
        if (SalleAttente.length > 0 && !this.intervalle) {
            this.intervalle = setInterval(() => {
                console.log("Miaou !");
                audio.play();
            }, 2000);  // Miaule toutes les 2 secondes
        } else if (SalleAttente.length === 0 && this.intervalle) {
            clearInterval(this.intervalle); // Arrêter le miaou si la salle d'attente est vide
            this.intervalle = null;
        }
    }
};

// Fonction avec des délais
const simulationAvecDelais = () => {
    mettreAJourTableau("salle-attente", SalleAttente); // Initialisation
    chat.miauler();  // Lancer le miaou

    const traiterProchainPatient = () => {
        if (SalleAttente.length === 0) {
            ajouterMessage("Tous les patients ont été traités !");
            chat.miauler();  // Vérifier si la salle d'attente est vide et arrêter le miaou
            return;
        }

        // Prend et retire le premier patient
        const patient = SalleAttente.shift();

        // Étape 1 : Le patient se rend au cabinet
        setTimeout(() => {
            patient.seRendre("cabinet", SalleAttente, doctor.cabinet);
            doctor.accueillir(patient);

            // Étape 2 : Le docteur soigne le patient
            setTimeout(() => {
                doctor.soigner(patient);

                // Étape 3 : Le patient sort du cabinet
                setTimeout(() => {
                    doctor.faireSortir(patient);
                    patient.seRendre("pharmacie", doctor.cabinet, Pharmacie);

                    // Étape 4 : Le patient va à la pharmacie
                    setTimeout(() => {
                        pharmacie.accueillir(patient);

                        // Passe au prochain patient après les traitements
                        traiterProchainPatient();
                    }, 1500); // Délai pour aller à la pharmacie
                }, 1500); // Délai pour sortir du cabinet
            }, 2000); // Délai pour être soigné
        }, 1000); // Délai pour se rendre au cabinet
    };

    traiterProchainPatient(); // Lancer la simulation pour le premier patient
};

// Lancer la simulation avec des délais
simulationAvecDelais();

