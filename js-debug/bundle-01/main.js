/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}

/**Questo codice così come è non mostra nulla perché la condizione è falsa in partenza mentre se andiamo a mettere i < 5 andrà a contare da 0 a 4 */

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
}

/**L'errore di questo codice è l'= singolo che significa assegnazione mentre con == andiamo ad effettuare un confronto */


// ESERCIZIO 3
function loopToFive() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

/**L'errore in questo codice sono le , al posto dei ; e settando i = 1 e i <= 5 andremo a contare da 1 a 5*/


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const elem = numbers[i];
        if (elem % 2 === 0) {
            evenNumbers.push(elem);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

/**errore 1: il ; dopo i++ 
 * errore 2: un singolo = che significa assegnamento
 * errore 3: stiamo andando a dividere per 2 l'array e non gli elementi all'interno
 * errore 4: non stiamo scorrendo l'array fino all'ultimo elemento
 * errore 5: stiamo pushando nell'array l'indice e non il valore
   errore 6: il return va fuori dal ciclo for
   errore 7: ; dopo la condizione 
*/