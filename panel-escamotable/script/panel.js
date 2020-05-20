"use strict";

class Panel {
  host;

  constructor(host) {
    // Récupère l'élément associer à l'id host
    this.host = host;
    // console.log(host);
    /**
     * Div contenant le panneau
     */
    let elPanel = document.createElement("div");
    elPanel.id = "mySidebar";
    elPanel.className = "w3-sidebar w3-bar-block w3-dark-grey w3-animate-left";
    elPanel.style.display = "none";

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

    // elButton.addEventListener("click", closePanel());

    let openButton = document.getElementById('panel_button');

    console.log(openButton);
  }

  /**
   *
   */
  static openPanel() {
    document.getElementById("mySidebar").style.display = "block";
  }

  static closePanel() {
    document.getElementById("mySidebar").style.display = "none";
  }
}
