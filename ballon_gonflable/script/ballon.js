"use strict";

const PRESSION_MAX = 220;

class Ballon {
  constructor(pression_init) {
    if (pression_init > PRESSION_MAX) {
      pression_init = PRESSION_MAX;
    }

    this._pression = pression_init;
    this._estEclate = false;
  }

  get pression() {
    if (this._estEclate) {
      throw Error("Ballon éclaté :'(");
    }

    this.logStatus();
    return this._pression;
  }

  set pression(p) {
    if (p < PRESSION_MAX) {
      this._pression = p;
    } else {
      this._estEclate = true;
      console.log("Boom !");
      this._pression = null;
    }
  }

  get estEclate() {
    return this._estEclate;
  }

  gonfler(p) {
    if (!this._estEclate) {
      this.pression += p;
    }
  }

  degonfler(p) {
    this.pression -= p;
  }

  logStatus() {
    if (!this._estEclate) {
      console.log("la pression du ballon est de " + this._pression);
    } else {
      console.log("Le ballon est mort :'(");
    }
  }
}
