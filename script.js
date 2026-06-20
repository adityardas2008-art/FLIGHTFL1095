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
// ===============================
// Progress Animation
// ===============================

function startProgress(){

let width = 0;

let loading = setInterval(() => {

width++;

progressBar.style.width = width + "%";

if(width == 30){

line3.innerHTML = "> Loading Memories...";

}

if(width == 60){

line4.innerHTML = "> Destination Locked : FOREVER";

}

if(width >= 100){

clearInterval(loading);

setTimeout(showIntro,1200);

}

},35);

}

// ===============================
// Show Intro
// ===============================

function showIntro(){

loader.classList.add("fadeOut");

setTimeout(()=>{

loader.style.display="none";

intro.classList.add("active");

airport.volume = 0.20;

airport.play();

piano.volume = 0.15;

piano.play();

changeQuotes();

},1800);

}

// ===============================
// Quotes
// ===============================

const quotes = [

{
title:"Some journeys are measured in miles...",
sub:"Ours has been measured in memories."
},

{
title:"21 June 2023",
sub:"The day two strangers began one unforgettable journey."
},

{
title:"Flight FL1095",
sub:"Departure : 21 June 2023 • Arrival : 21 June 2026"
},

{
title:"1,095 Beautiful Days",
sub:"Every smile, every tear, every memory brought us here."
}

];

let current = 0;

function changeQuotes(){

quote.style.opacity = 0;

subQuote.style.opacity = 0;

setTimeout(()=>{

quote.innerHTML = quotes[current].title;

subQuote.innerHTML = quotes[current].sub;

quote.style.opacity = 1;

subQuote.style.opacity = 1;

current++;

if(current >= quotes.length){

current = 0;

}

},700);

setInterval(()=>{

quote.style.opacity = 0;

subQuote.style.opacity = 0;

setTimeout(()=>{

quote.innerHTML = quotes[current].title;

subQuote.innerHTML = quotes[current].sub;

quote.style.opacity = 1;

subQuote.style.opacity = 1;

current++;

if(current >= quotes.length){

current = 0;

}

},700);

},6000);

}
// ===============================
// BEGIN BOARDING BUTTON
// ===============================

beginBtn.addEventListener("click", () => {

    click.currentTime = 0;
    click.play();

    beginBtn.innerHTML = "BOARDING...";

    beginBtn.disabled = true;

    beginBtn.style.opacity = "0.7";

    setTimeout(() => {

        document.body.style.transition = "2s";

        document.body.style.background = "#000";

    }, 500);

    setTimeout(() => {

        window.location.href = "airport.html";

    }, 3500);

});
