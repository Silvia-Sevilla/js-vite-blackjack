import _  from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<string>} tiposDeCarta ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciles ejemplo: ['A','J','Q','K']
 * @returns Array retorna un nuevo deck de cartas
 */
 
export const crearDeck = (tiposDeCarta, tiposEspeciles) => {

    if (!tiposDeCarta) throw new Error('Tipos de cartas es obligatorio como un arreglo string'); 

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciles ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}