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

// version naïve

function isEven(nbr) {
    if ( nbr % 2 == 0){
        return true;
    }else {
        return false;
    }
}

// version optimisée

function isEven(nbr) {
    return nbr % 2 == 0;
}

console.log(isEven(47))

// changement de classe

// GetElementsByClassName -> retourne toujour un tableau, même
// si il y a q'un seul élément.
// const red = document.getElementsByClassName('red')[0];
const red = document.querySelector('.red');
red.className = "blue"; // à éviter
red.classList.add("gras");
red.classList.remove("blue")
red.classList.add("red");
console.log(red)

//EXERCICE
// Faire une fonction 
// replaceC(element_a_cible, ancienne_class, la nouvelle class)

// <a href="#" class="btn btn-primary">Envoyer</a>

//replaceC(<a>, "btn-primary", "btn-danger")
// <a href="#" class="btn btn-danger">Envoyer</a>

//faire le corps de la fonction, cette fonction ne retourne rien

function replaceC(target, oldClass, newClass) {
    const t = document.querySelector(target);
    if ( oldClass !== newClass){
        if( t.classList.contains(oldClass)){
            t.classList.remove(oldClass);
            t.classList.add(newClass)
        }else{
            console.error("La classe n'existe pas dans l'element " + target)
        }
    }else{
        console.error("Vous voulez remplacer la class par elle même.")
    }
}

 replaceC("#exo", "autruche", "green")
 
 /*
    Créez une fonction qui :
        demande la saisie d'un rayon ;
        retourne !!!!!!!!!!!! la surface du cercle de ce rayon
        rajouter comme argument, un bool qui se nomme isCircle, si isCircle est faux
        faites la surface d'un carré à la place.
 */

        // la surface d'un cercle est de pi * R²

        function surface(r, isCircle) {
            if (isCircle){
                return Math.PI * r ** 2;
            }else {
                return r ** 2 // c'est un carré
            }
        }


        console.log(surface(5))


        //EVENEMENTS

        const likes = document.getElementById('likes');
        const btn = document.querySelector('.btn');
        let likesNumber = 0

        btn.addEventListener("click", function() {
            likesNumber++;
            likes.innerHTML = likesNumber;
            this.classList.toggle("pink");
            this.classList.toggle("chartreuse");
        })

        //Exercice faites un mode jour/nuit !

        const jour = document.getElementById('jour-nuit-toggle');
        const body = document.body;

        jour.addEventListener("click", function() {
            body.classList.toggle("black");
            body.classList.toggle("white");
        })


        // Timers
        // Le setTimout dans cette exemple au bout de 5 secondes (5000ms)
        // la fonction anonyme sera traitée ( le console log envoyé )
        setTimeout(function(){
            console.log("coucou !!")
        }, 5000)

        setInterval(function() {
            console.log("EXTERMINATE !!!!")
        }, 2000)

        // faire un lorem ipsum dans un <p> et toute les 3 secondes il changera de taille
        // la  taille initiale est de 1em et la taille d'apres est de 3 em et vice versa

        const text = document.getElementById('text')
        setInterval(function() {
            text.classList.toggle("text-tres-tres-gros")
            text.classList.toggle("text-pas-gros")
        }, 1000)