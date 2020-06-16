"use strict";

/**
 * Composante : Panneau latérale
 */
class Panel {
  /**
   * Construit un panneau
   * @param {HTMLElement} host Élément hôte qui acceuil le panneau
   * @param {String} bgColor Couleur de fond du panneau (par défaut : gris)
   */
  constructor(host, bgColor = "gray") {
    /**
     * Div contenant le panneau
     */
    let elPanel = document.createElement("div");
    elPanel.id = "mySidebar";
    elPanel.className = "w3-sidebar w3-bar-block w3-animate-left";
    elPanel.style.display = "none";
    elPanel.style.backgroundColor = bgColor;

    this._elPanel = elPanel;

    host.appendChild(elPanel);

    /**
     * Liens du menu (à configurer)
     */
    for (let i = 0; i < 3; ++i) {
      let elA = document.createElement("a");
      elA.href = "#";
      elA.className = "w3-bar-item w3-button";
      elA.innerHTML = "Link " + (i + 1);

      elPanel.appendChild(elA);
    }

    /**
     * Boutton pour fermer le panneau
     */
    let elButton = document.createElement("button");
    elButton.innerHTML = "Close";
    elButton.className = "w3-bar-item w3-button w3-large";

    elPanel.appendChild(elButton);

    // Fermeture du panneau quand on clique sur le boutton close
    elButton.addEventListener("click", () => {
      this.close();
    });
  }

  /**
   * Change la couleur du fond du panneau
   * @param {string} color Couleur du background du paneau
   */
  backgroundColor(color = "gray") {
    this._elPanel.style.backgroundColor = color;
  }

  /**
   * Ouverture du panneau
   */
  open() {
    this._elPanel.style.display = "block";
  }

  /**
   * Fermeture du panneau
   */
  close() {
    this._elPanel.style.display = "none";
  }
}
