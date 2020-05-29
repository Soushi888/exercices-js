"use strict";

/**
 * Sélectionner (atteindre) les éléments
 */
(function selectionner(){
    console.groupCollapsed('Sélectionner');
    let table_produits = $('#produits_promo');
    console.log(table_produits);
    console.log(table_produits.get(0));
    console.log("nbr de tr : ", $('#produits_promo tr').length);
    console.log($('#produits_promo tr').get(1));
    let total = 0;
    $('#produits_promo tbody tr').each(function(index, elelement){
        // console.log(index, elelement);
        let tdprix = $(elelement).children(':last')
        let prix = parseFloat(tdprix.text().substr(1));
        console.log(prix);
        total += prix;
    })
    console.log(total);
    
    console.groupEnd();
})()

/**
 * Naviguer de proche en proche
 */
function naviguer() {
    console.groupCollapsed('Naviguer de proche en proche');
    console.groupEnd();
}


/**
 * Lire et écrire les contenus
 */
function lire_ecrire_les_contenus() {
    console.groupCollapsed('Lire et écrire les contenus');
    console.groupEnd();
}


/**
 * Lire et écrire les propriétés de style de l'élément
 */
function lire_ecrire_style() {
    console.groupCollapsed('Lire et écrire les propriétés de style de l\'élément');
    console.groupEnd();
}


/**
 * Travailler avec les attributs
 */
function travailler_les_attributs() {
    console.groupCollapsed('Travailler avec les attributs');
    console.groupEnd();
}


/**
 * Ajouter (créer) et supprimer des éléments
 */
function ajouter_supprimer_elements() {
    console.groupCollapsed('Ajouter (créer) et supprimer des éléments');
    console.groupEnd();
}

/**
 * Animer
 */
function animer() {
    console.groupCollapsed('Animer');
    console.groupEnd();
}












