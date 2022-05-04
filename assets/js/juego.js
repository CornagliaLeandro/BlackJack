/**
 * 2c = 2 de trebol(two of the clubs)
 * 2d = 2 de diamantes(two of the diamons)
 * 2h = 2 de corazones(two of the hearts)
 * 2s = 2 de espada(two of the spades)
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['J', 'Q', 'K', 'A'];
let puntosJugador = 0;
let puntosComputadora = 0;

//Referencias a nuestro HTML

const btnNuevo = document.querySelector('#btnNuevo');
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-carta');
const divCartasComputadora = document.querySelector('#computadora-carta');


btnNuevo.addEventListener('click', () =>{
    
})

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
    return deck;
}

crearDeck();

//Esta funcin mezcla la baraja
function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

shuffleArray(deck);

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

//extraer el valor de la carta dada
const valorCarta = (carta) => {

    let valueCard = carta;
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

//turno computadora
const turnoComputadora = ( puntosMinimos) =>{

    do {
        const carta = darCarta();
    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML[1].innerText = puntosComputadora;
    // console.log( carta )
    // console.log( puntosJugador)
    
    const imagen = document.createElement('img');
    imagen.src = `assets/cartas/${ carta }.png`;
    imagen.classList.add('carta');
    divCartasComputadora.append( imagen );

    if(puntosMinimos > 21){
        // puntosHTML[0].innerText = ' PERDISTE';
        break;
    }
    
        
    } while (puntosMinimos > puntosComputadora && puntosMinimos <= 21);
//    puntosHTML[0].innerText = 'PERDISTE'

    if(puntosComputadora == puntosMinimos || puntosMinimos > 21 || (puntosComputadora > puntosMinimos && puntosComputadora < 22)){
        puntosHTML[0].innerText = 'Perdiste'
    }else if(puntosMinimos < 22 && (puntosComputadora < puntosMinimos || puntosComputadora > 21)){
        puntosHTML[0].innerText = 'Ganaste'
    }
}


//Eventos

btnNuevo.addEventListener('click', () =>{

})

btnPedir.addEventListener('click', () => {
    const carta = darCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;
    
    const imagen = document.createElement('img');
    imagen.src = `assets/cartas/${ carta }.png`;
    imagen.classList.add('carta');
    divCartasJugador.append( imagen );
    
    if (puntosJugador > 21) {
        // puntosHTML[0].innerText = `${puntosJugador} - PERDISTE`;
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    } else if( puntosJugador === 21){
        btnPedir.disabled = true;
        btnDetener = true;
        turnoComputadora(puntosJugador);
    }

})

btnDetener.addEventListener('click', () =>{
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
    // if(puntosJugador > puntosComputadora || puntosComputadora > 21){
    //     puntosHTML[0].innerText = `GANASTE`;
    // }
})



//Todo: borrar




