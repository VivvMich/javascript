// HELLO WORLD

const titre = document.getElementById("hello");
const mcflan = document.getElementById('mcflan');
//const titre = document.querySelector("#hello");

titre.innerHTML = "Hello World !! ";
console.log(titre);

// EXERICE CONDITION
let banane = "T\’es sourd McFlan"

// Afficher dans un console log 
// le texte si celui-ci fait 20 caractères ou plus
// pour connaitre la taille d'un element ==> element.length

if (banane.length >= 20){
    console.log(banane);
}

if (banane.length >= 20){
    mcflan.innerHTML = banane;
}else {
    mcflan.innerHTML = "Erreur !";
}

console.log(banane.length)

//2eme partie
// afficher le texte dans un <p> en italique et en gris

// Calcul

let maths1 = 44;
let maths2 = 27;
let resultat = maths1 * maths2 + maths1;

let maths3 = 3

let resultat2 = maths1 % maths3
console.log(resultat2);

if ( 88897797 % 2 == 0 ){
    console.log("le nombre testé est un nombre pair.")
}
else{
    console.log("le nombre testé est un nombre impair.")
}

let color = "#4d00ff";

switch(color) {

    case "#ff6b33":
        console.log("Tu aime l'orange.")
        break;
    case "#55ff33":
        console.log("Toi tu aime l'alchool.")
        break;
    case "#4d00ff":
        console.log('GLOU GLOU GLOU !')
        break;
    default:
        console.log('Message par defaut!')
}

// LES BOUCLES

for ( let pas = 0; pas <= 5; pas++ ){
    if (pas != 0){
        console.log("J'ai fait " + pas + " pas vers le nord.")
    }
    
}

let stop_brasse = 4512;

for ( let brasse = 0; brasse <= 10000; brasse++ ){
    if (brasse != 0){
        console.log("J'ai fait " + brasse + " brasse(s) vers le nord.")
    }
    if ( brasse == stop_brasse){
        console.log("Tu n'es pas comme Philippe Croison, tu vaut moins qu'un cul de jatte et qu'un manchot")
        break;
    }
}

// LES FONCTIONS

function carre(nbr) {
    return nbr ** 2
}

let nbr_au_carre = 10;
let resultat_carre = carre(nbr_au_carre);
console.log(resultat_carre);

if ( carre(nbr_au_carre) > 90 ){
    console.log("le carré de 10 est superieur à 90")
}

let mon_mood = "HEUREUX !!!!";
let mon_mood_trois_fois = mon_mood.repeat(3);
console.log(mon_mood_trois_fois);

// EXERCICESSSSSSSSSSSS

// Le nombre A et Le nombre B sont des variables definies 
// AVANT la fonction
// faire une fonction à deux arguments
// qui multiplie le nombreA et le nombreB 
// et qui le retourne dans uen variable "mult"
// afficher mult dans le console log
let nombreA = 41;
let nombreB = 17;

function multiplication(nbra, nbrb){
    return nbra * nbrb;
}

let mult = multiplication(nombreA, nombreB);
console.log(mult)

function division(nbra, nbrb) {
    if( nbrb != 0){
        return nbra / nbrb;
    }else{
        return Infinity;
    }
}

console.log(division(nombreA,nombreB))