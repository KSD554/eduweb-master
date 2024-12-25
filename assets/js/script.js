'use strict';

/**
 * Ajouter un événement sur un élément
 * Cette fonction permet d'ajouter un événement à un ou plusieurs éléments.
 * Si plusieurs éléments sont passés, l'événement est ajouté à chacun d'eux.
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {  // Si plusieurs éléments sont sélectionnés
    for (let i = 0; i < elem.length; i++) {  // On parcourt chaque élément
      elem[i].addEventListener(type, callback);  // Ajoute l'événement à chaque élément
    }
  } else {  // Si un seul élément est sélectionné
    elem.addEventListener(type, callback);  // On ajoute l'événement à cet élément
  }
}

/**
 * Toggle (afficher/masquer) la barre de navigation
 * Cette section gère l'affichage/masquage du menu de la barre de navigation
 * lorsqu'un bouton est cliqué.
 */
const navbar = document.querySelector("[data-navbar]");  // Sélectionne la barre de navigation
const navTogglers = document.querySelectorAll("[data-nav-toggler]");  // Sélectionne les boutons pour ouvrir/fermer la navigation
const navLinks = document.querySelectorAll("[data-nav-link]");  // Sélectionne les liens du menu
const overlay = document.querySelector("[data-overlay]");  // Sélectionne l'overlay (superposition) qui apparaît lors de l'ouverture du menu

// Fonction pour activer ou désactiver la barre de navigation et l'overlay
const toggleNavbar = function () {
  navbar.classList.toggle("active");  // Ajoute ou enlève la classe "active" à la barre de navigation
  overlay.classList.toggle("active");  // Ajoute ou enlève la classe "active" à l'overlay
}

// Ajoute un événement "click" sur chaque bouton pour toggler la navigation
addEventOnElem(navTogglers, "click", toggleNavbar);

// Fonction pour fermer la barre de navigation et l'overlay
const closeNavbar = function () {
  navbar.classList.remove("active");  // Retire la classe "active" de la barre de navigation
  overlay.classList.remove("active");  // Retire la classe "active" de l'overlay
}

// Ajoute un événement "click" sur chaque lien pour fermer la barre de navigation lorsqu'un lien est cliqué
addEventOnElem(navLinks, "click", closeNavbar);

/**
 * Rendre le header actif lorsque l'utilisateur fait défiler la page vers 100px
 * Cette section gère l'apparition d'un effet lorsque l'utilisateur défile vers le bas de la page.
 */
const header = document.querySelector("[data-header]");  // Sélectionne le header
const backTopBtn = document.querySelector("[data-back-top-btn]");  // Sélectionne le bouton "retour en haut"

// Fonction pour ajouter ou enlever la classe "active" sur le header et le bouton de retour en haut
const activeElem = function () {
  if (window.scrollY > 100) {  // Si la position du défilement est plus grande que 100px
    header.classList.add("active");  // Ajoute la classe "active" au header
    backTopBtn.classList.add("active");  // Ajoute la classe "active" au bouton de retour en haut
  } else {
    header.classList.remove("active");  // Retire la classe "active" du header
    backTopBtn.classList.remove("active");  // Retire la classe "active" du bouton de retour en haut
  }
}

// Ajoute un événement "scroll" sur la fenêtre pour activer la fonction lorsque l'utilisateur fait défiler la page
addEventOnElem(window, "scroll", activeElem);
