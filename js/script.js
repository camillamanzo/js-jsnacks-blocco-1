// /**
//  *  Il software deve chiedere per 5 volte all'utente di inserire un numero.
//  *  Il programma stampa la somma di tutti i numeri inseriti.
//  *  Esegui questo programma in due versioni, con il for e con il while.
//  */


// let sommaUno = 0;

// for (let i = 0; i < 5; i++ ) {
//     sommaUno += parseInt ( prompt ("inserisci un numero") );
// }



// let sommaDue = 0;
// let x = 0;

// while (x < 5){
//     sommaDue += parseInt ( prompt ("inserisci un numero") );

//     x++;
// }

// console.log(sommaUno);
// console.log(sommaDue);









/**
 * 
 * Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e 
 * una lista di cognomi, Gatsby vuole generare una falsa lista di 8 invitati.
 * Stampiamo la lista in modo ordinato in html come elementi <li> figli di un unico <ul>.
 * 
 */



// const listaNomi = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
// const listaCognomi = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];

// let listaInvitati = [];



// for ( let i = 0; i < 8; i++){

//     let nomeRandom = Math.floor( Math.random() * listaNomi.length);
//     let cognomeRandom = Math.floor( Math.random() * listaCognomi.length);

//     console.log(nomeRandom)
//     console.log(cognomeRandom)

//     let nomeInteroRandom = listaNomi[nomeRandom] + " " + listaCognomi [cognomeRandom];

//     console.log(nomeInteroRandom)

//     listaInvitati.push(nomeInteroRandom);
// }

// // let listaScritta = document.getElementById("list").innerHTML;
// // document.getElementById("list").innerHTML = listaScritta + '<li>' + listaInvitati[i] + '</li>';

// document.getElementById("list-one").innerHTML =  '<li>' + listaNomi + '</li>';
// document.getElementById("list-two").innerHTML =  '<li>' + listaCognomi + '</li>';


// document.getElementById("list-three").innerHTML = '<li>' + listaInvitati + '</li>';







/**
 *  A)
 *   Crea due array che hanno un numero di elementi diversi (di almeno 6 elementi).
 *   Aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avrà 
 *   tanti quanti l'altro.
 * 
 *  B)
 *   Mostriamo in HTML le due liste in parallelo
 */


// const firstArray = ["mele", "pere", "arance", "susine", "banane", "kiwi", "mandarini", "prugne", "pesche", "uva"]
// let secondArray = ["cicoria", "rucola", "spinaci", "lenticchie", "quinoa", "semi"]

// while (secondArray.length < firstArray.length){
// secondArray.push(Math.random() * 10);
// }

// console.log (firstArray)
// console.log (secondArray)
 
// document.getElementById("list-one").innerHTML =  '<li>' + firstArray + '</li>';
// document.getElementById("list-two").innerHTML =  '<li>' + secondArray + '</li>';
// document.getElementById("list-three").innerHTML = '<li>' + "Questa lista è vuota..." + '</li>';