/* programet läser in en temperatur uttryckti grader Fahrenheit 
och  översätter temperaturen till grader Celsius. */

let temprature = prompt("Lägga till en Fahrenheit grader.")
// Ett funktion som översätter tempraturen från Celsius till Fahrenheit
let converter = function(){

let  celsius  =  (5/9) * (temprature - 32);
celsius.toFixed(0)

return ("Temperaturen i Celsius är " + celsius.toFixed(1) + " C.");
}
alert(converter());
