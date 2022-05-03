/**
 * 2c = 2 de trebol(two of the clubs)
 * 2d = 2 de diamantes(two of the diamons)
 * 2h = 2 de corazones(two of the hearts)
 * 2s = 2 de espada(two of the spades)
 */

// import _ from "./underscore-min.";

//
let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['J', 'Q', 'K', 'A'];

//Esta funcion crea una nueva baraja
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    for (let i = 0; i < especiales.length; i++) {
        for (const esp of especiales) {
            deck.push(esp + tipos[i])
        }
    }

    //en javaScript no tenemos una funcion para los arreglos que mezcle todos sus elementos, asi que tendremos que usar una libreria(underscorejs.org la cual esta en el archivo underscore.js) ofrece funciones que javascript deberia tener por defecto pero no las tiene...(Aclaracion= la siguiente funcion mezcla la baraja, pero no es de underscore)
    return deck;

}

crearDeck();

//Esta funcin mezcla la baraja
function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

shuffleArray(deck);
// console.log(shuffleArray(deck))
// console.log(deck)

//Esta funcion da una carta y la quita del mazo
const darCarta = () => {
    if (deck.length === 0) {
        throw ' no hay cartas en el deck';
    } else {
        let carta = deck[0];
        deck.shift();
        return carta;
    }
}

console.log(deck)
// console.log(darCarta())

//extraer el valor de la carta dada
const valorCarta = () => {

    let valueCard = darCarta();
    let valor;
    let puntos;

    if (valueCard.length == 3) {
        valor = valueCard.substring(0, 2);
    } else {
        valor = valueCard.substring(0, 1);
    }

    if (isNaN(valor)) {
        puntos = (valor === 'A') ? 11 : 10;
    } else {
        puntos = valor * 1;
    }

    return puntos;
}
console.log(deck)
console.log(valorCarta())
console.log(deck)

console.log(deck)
console.log(valorCarta())
console.log(deck)




