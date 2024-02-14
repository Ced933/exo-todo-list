"use strict";
const form = document.querySelector('form');
let input = document.querySelector("input[type='text']");
const messageBox = document.querySelector(".message-container");
// sauve garder dans le locale storage 
function storeList() {
    // todolist est le nom qu'on a donné a notre key ds le localstorage 
    window.localStorage.todoList = messageBox.innerHTML;
}
// récupérer les donner dans le local storage 
function getStorage() {
    if (window.localStorage.todoList) {
        messageBox.innerHTML = window.localStorage.todoList;
    }
    else {
        messageBox.innerHTML = `<p>cliquez sur un todo pour le supprimer</p>`;
    }
}
// au chargement 
window.addEventListener('load', getStorage);
// je crée une fonction qui va prendre en paramettre notre futur e.target.value car en js les fonctions sont jouées en 1er  
// const addMessage = (valueMessage:any) =>{
//  }
messageBox.addEventListener('click', (e) => {
    e.target.remove();
    storeList();
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // on appel la fonction addMessage à chaque soumission du formulaire  avec le paramettre pbridge qui de vide est passé a e.target.value
    if (input.value.length < 2) {
        alert('votre message doit faire au moins 2 caractères');
        return false;
    }
    else {
        messageBox.innerHTML += `<p>${input.value}</p>`;
        localStorage.setItem('value', input.value);
        // on remet la valeur interne de l'input a 0
        input.value = "";
        // on actualise la liste dans le localstorage 
        storeList();
    }
});
