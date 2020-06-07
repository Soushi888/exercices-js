"use strict";

const MIN_NB_CAR = 1; // Nombre minimum de caractères dans les champs input de type text

let form_resa = $('#form_resa');
console.log(form_resa);

/**
 * Modèle de la fonction de validation 
 */ 
function valider(event) {
    console.log("Tentative de soumission du formulaire :", event.target);
    let form_valid = true; // Arbritraire, on le met à false dès qu'on rencontre un champ invalide
    /**
     * Validation du champ nom : Le nom doit commencer par un caractère alphabétique français
     */

    /**
     * Select ville (une ville doit être sélectionnée)
     */

    /*
     * Validation du champ date avec expression rationnelle
     */

    /**
     * Select sport (deux sports sélectionnés)
     */

    /*
     * Validation des champs radio du sexe 
     */

    /*
     * Validation du champ "J'accepte les conditions" qui doit être coché
     */

    // Le textarea n'est pas validé ici. Si vous le validez, utilisez .val() comme pour les autres champs de saisie (exiger entre 10 et 100 caractères)

    // En conclusion on soumet ou on soumet pas suivant la valeur de form_valid
    if ( ! form_valid) {
        event.preventDefault();
    }
}

form_resa.on('submit', valider(evt));
 
let fields = form_resa.find(':input');
console.log(fields);
