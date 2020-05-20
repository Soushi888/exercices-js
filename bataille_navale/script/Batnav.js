"use strict";

class Batnav {
  DIM = 5; // Dimension de la grille
  ESPACE = " ";
  CASE_VIDE = 0; // Case vide (sans bateau, sans tir dans l'eau)
  DANS_EAU = -Infinity; // Case tir dans l'eau

  constructor() {
    /**
     * Initialiser la grille
     */
    this.cases = [];
    for (let i = 0; i < this.DIM * this.DIM; i++) {
      this.cases[i] = this.CASE_VIDE;
    }

    /**
     * Placer des bateaux fixes sur la grille initiale
     */
    // Un bateau de deux cases en ligne 1, colonnes 0 et 1
    this.set_case(1, 0, 1);
    this.set_case(1, 1, 1);
    // // Un bateau de trois cases en colonne 4, lignes 3 à 5
    this.set_case(2, 4, 2);
    this.set_case(3, 4, 2);
    this.set_case(4, 4, 2);
    // // Un bateau de deux cases en ligne 2, colonnes 1 et 2
    this.set_case(2, 1, 3);
    this.set_case(2, 2, 3);

    // Afficher la grille et les consignes.
    this.afficher();
    console.group("consignes");
    console.log(
      "batnav.afficher = Afficher la grille non révélée,\nbatnav.afficher(true) = Afficher la grille révélée,\nbatnav.tirer(l,c) = Tirer sur l'emplacement de ligne l et de colonne c,\nbatnav.reset = Remet le jeu à zéro. "
    );
  }

  /**
   * Les cases avec les valeurs possibles:
   *   0 (CASE_VIDE): case sans bateau
   *   1,2,3,...: case du bateau contenant le numéro du bateau
   *   -1,-2,-3,...: case du bateau touchée
   *   -Infinity (DANS_EAU): case tire dans l'eau
   */

  /**
   * Lire valeur d'une case à partir des indices ligne et colonne
   * @param {BigInteger} l numéro de la ligne
   * @param {BigInteger} c numéro de la colonne
   */
  get_case(l, c) {
    return this.cases[l * this.DIM + c];
  }

  /**
   * Écrire valeur d'une case à partir l,c
   * @param {BigInteger} l numéro de la ligne
   * @param {BigInteger} c numéro de la colonne
   * @param {BigInteger} v numéro du bateau
   */
  set_case(l, c, v) {
    this.cases[l * this.DIM + c] = v;
  }

  /**
   * Afficher la grille dans la console
   * @param {boolean} reveler
   */
  afficher(reveler = false) {
    console.group("grille");

    // Ligne en-tête (numéros de colonnes)
    let ligne_entete = this.ESPACE.repeat(3);
    for (let c = 0; c < this.DIM; c++) {
      ligne_entete += c + this.ESPACE.repeat(2);
    }
    console.log(ligne_entete);

    for (let l = 0; l < this.DIM; l++) {
      let ligne = l + this.ESPACE.repeat(); // Chaîne représentant la ligne
      for (let c = 0; c < this.DIM; c++) {
        // Valeur de la case
        let val = this.get_case(l, c);
        let symbole = ".";
        if (reveler) {
          symbole = val === this.DANS_EAU ? "*" : String(val);
        } else {
          if (this.DANS_EAU === val) {
            symbole = "*";
          } else if (val < 0) {
            symbole = "X";
          }
        }
        ligne += symbole.padStart(3, this.ESPACE);
      }
      console.log(ligne);
    }
    console.groupEnd();
  }

  /**
   * Faire un tir sur la ligne l et la colonne c
   * @param {*} l
   * @param {*} c
   */
  tirer(l, c) {
    console.log(`tirer en (${l}, ${c})`);
    let res = ""; // La chaîne résultat
    let val = this.get_case(l, c);
    if (this.CASE_VIDE === val) {
      this.set_case(l, c, this.DANS_EAU);
      res = "Dans l'eau !";
    } else if (val > 0) {
      // Changer son signe en négatif
      this.set_case(l, c, -val);
      res = "Touché !";
      if (this.est_fini()) {
        res += "\nPartie terminée !";
      }
    } else if (val < 0) {
      res = "Déjà Touché !";
    } else if (this.DANS_EAU === val) {
      res = "Déjà dans l'eau !";
    }
    // console.log("Résultat du tir : ", res);
    this.afficher();

    return res;
  }

  /**
   * Remet le jeu à zéro
   */
  reset() {
    /**
     * Réinitialiser la grille
     */
    this.cases = [];
    for (let i = 0; i < this.DIM * this.DIM; i++) {
      this.cases[i] = this.CASE_VIDE;
    }

    /**
     * Replacer des bateaux fixes sur la grille
     */
    // Un bateau de deux cases en ligne 1, colonnes 0 et 1
    this.set_case(1, 0, 1);
    this.set_case(1, 1, 1);
    // // Un bateau de trois cases en colonne 4, lignes 3 à 5
    this.set_case(2, 4, 2);
    this.set_case(3, 4, 2);
    this.set_case(4, 4, 2);
    // // Un bateau de deux cases en ligne 2, colonnes 1 et 2
    this.set_case(2, 1, 3);
    this.set_case(2, 2, 3);

    // Afficher la grille et les consignes.
    this.afficher();
    console.group("consignes");
    console.log(
      "batnav.afficher = Afficher la grille non révélée,\nbatnav.afficher(true) = Afficher la grille révélée,\nbatnav.tirer(l,c) = Tirer sur l'emplacement de ligne l et de colonne c,\nbatnav.reset = Remet le jeu à zéro. "
    );
  }

  /**
   * Déterminer si le jeu est terminé
   */
  est_fini() {
    // La partie est finie s'il n'y a aucune valeur >0 dans le tableau
    let i = 0;
    while (i < this.cases.length && this.cases[i] <= 0) {
      i++;
    }
    return i === this.cases.length;
  }
}
