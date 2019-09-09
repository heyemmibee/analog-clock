const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);

let hr = date.getHours();
let min =date.getMinutes();
let sec = date.getSeconds();

let secP = sec*360/60;
let minP = (min*360/60)+(sec*(360/60)/60);
let hourP = (hr*360/12)+(min*(360/60)/12);

function ticktock () {

    secP = secP+6;
    minP = minP+(6/60);
    hourP = hourP+(30/360);

    HOURHAND.style.transform = "rotate(" + hourP + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minP + "deg)";
    SECONDHAND.style.transform = "rotate(" + secP + "deg)";
}

var interval = setInterval(ticktock, 1000);