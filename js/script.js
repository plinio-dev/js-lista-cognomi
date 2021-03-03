// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

// 1 Chiedere all'utente il cognome
var cognomeUtente = prompt ("Inserisci il cognome");

// 2  creazione array

var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// 3 inserire il dato utente nell'array
cognomi.push (cognomeUtente);

// 4 stampa la lista ordinata alfabeticamente
aggiungi = cognomi.sort();
// stampo l'array
console.log(cognomi);

// 5 scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

console.log(cognomi.indexOf(cognomeUtente) + 1 );
