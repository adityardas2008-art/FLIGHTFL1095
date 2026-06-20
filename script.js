// ===============================
// FL1095 - Scene 1
// Terminal Boot Sequence
// ===============================

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");

const progressContainer = document.getElementById("progressContainer");
const progressBar = document.getElementById("progressBar");

const loader = document.getElementById("loader");
const intro = document.getElementById("intro");

const airport = document.getElementById("airportAmbience");
const piano = document.getElementById("piano");
const click = document.getElementById("clickSound");

const quote = document.getElementById("quote");
const subQuote = document.getElementById("subQuote");

const beginBtn = document.getElementById("beginBtn");

window.onload = () => {

setTimeout(() => {

typeLine(
line1,
"> Initializing FL1095 Terminal...",
120,
() => {

setTimeout(() => {

line2.innerHTML =
"> Passenger Verification Successful";

progressContainer.style.display="block";

startProgress();

},700);

});

},1000);

};

function typeLine(element,text,speed,callback){

let i=0;

let typing=setInterval(()=>{

element.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(typing);

if(callback){

callback();

}

}

},speed);

}
