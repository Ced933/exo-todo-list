"use strict";
const form = document.querySelector('form');
let input = document.querySelector("input[type='text']");
const messageBox = document.querySelector(".message-container");
// variable global qui va servir de pont entre notre e.target.value de notre input et notre fonction   
let pbridge = "";
let pArray = [];
input.addEventListener('input', (e, valueMessage) => {
    pbridge = e.target.value;
});
// je crée une fonction qui va prendre en paramettre notre futur e.target.value car en js les fonctions sont jouées en 1er  
const addMessage = (valueMessage) => {
    let p = document.createElement('p');
    p.innerHTML = valueMessage;
    messageBox.appendChild(p);
    localStorage.setItem('value', valueMessage);
    p.addEventListener('click', (e) => {
        e.target.remove();
        localStorage.removeItem('value');
    });
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // on appel la fonction addMessage a chaque soumission du formulaire  avec le paramettre pbridge qui de vide est passé a e.target.value
    if (input.value.length < 2) {
        alert('votre message doit faire au moins 2 caractères');
        return false;
    }
    else {
        addMessage(pbridge);
        // on remet la valeur interne de l'input a 0
        // input = null
        // on enleve ce qu'on a tapé précédemment dans l'input 
        input.value = "";
    }
});
