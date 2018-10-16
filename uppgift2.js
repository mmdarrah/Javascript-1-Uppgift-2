

// Ett program som beräknar arean och omkretsen för en valfri rektangel
alert("Hej... Jag kan beräkna arean och omkretsen för en valfri rektangel.")
let bredd = prompt("Lägga till rektangelns bredd.");
let längd = prompt("Lägga till rektangelns längd.");

// En funktion som beräknar rektangels area
function sumOfarea (){
    let area  = bredd * längd;
    return ("Rektangelns area är: " + area);
}
//  En funktion som beräknar rektangels omkretsen
function sumOfomkretesn (){
    let omkretsen =  (bredd * 2) * (längd * 2);
    return ("Och rektangelns omkretsen är: " + omkretsen);
}

// Funktioner anropa
alert(sumOfarea());
alert(sumOfomkretesn());





