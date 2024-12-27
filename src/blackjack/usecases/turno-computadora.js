import {crearCartaHTML, pedirCarta, valorCarta } from './';

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos 
 *  @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las 
 * @param {Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos, puntosHtml, divCartasComputadora, deck = [] ) => {

    if (!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if (!deck) throw new Error('El deck es necesario');
    if (!puntosHtml) throw new Error('Argumento puntos HTML  es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHtml.innerText = puntosComputadora;
        
        // TODOS crear carta
        const imgCarta = crearCartaHTML(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}