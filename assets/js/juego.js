 /**
  * 2c = 2 de trebol(two of the clubs)
  * 2d = 2 de diamantes(two of the diamons)
  * 2h = 2 de corazones(two of the hearts)
  * 2s = 2 de espada(two of the spades)
  */

 //
 let deck = [];
 const tipos = ['C', 'D', 'H', 'S'];
 const especiales = [ 'J', 'Q', 'K', 'A'];

 const crearDeck = ()=> {
     for(let i = 2; i <= 10 ; i++){
         for( let tipo of tipos ){
            deck.push(i + tipo);
         }
     }
     for (let i = 0; i < especiales.length; i++) {
         for (const esp of especiales) {
             deck.push(esp + tipos[i])
         }
     }


     console.log(deck);
 }

 crearDeck();