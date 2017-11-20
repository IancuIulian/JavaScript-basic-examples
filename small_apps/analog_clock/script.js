const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


// function runTheClock(){
    //Doing it like this loses the nice smooth transition between seconds
    //Upside: the time will be 100% accurate as we get the local time each second
    //Tip: to cancel the transition go to style.css -> #second and comment the 'transition' property
//     var date = new Date;
//
//     let hrPosition = date.getHours()*360/12 + (date.getMinutes()*360/60)/12;
//     let minPosition = (date.getMinutes()*360/60) + (date.getSeconds()*360/60)/60;
//     let secPosition = date.getSeconds()*360/60;
//
//     hrPosition = hrPosition + (30/360);
//     minPosition = minPosition + (6/60);
//     secPosition = secPosition + 6;
//
//     HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
//     MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
//     SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
// }


//This approach hands the calculation of the time to the browser (it gets the local time once, then the time is calculated upon that)
//In some situations the clock might lose its precision
//Upside: the smooth transition between seconds
var date = new Date;

let hrPosition = date.getHours()*360/12 + (date.getMinutes()*360/60)/12;
let minPosition = (date.getMinutes()*360/60) + (date.getSeconds()*360/60)/60;
let secPosition = date.getSeconds()*360/60;

function runTheClock(){
    hrPosition = hrPosition + (30/360);
    minPosition = minPosition + (6/60);
    secPosition = secPosition + 6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);

