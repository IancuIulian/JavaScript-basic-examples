const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e, current){
    e.preventDefault();  //this prevents stuff like scrolling the page up

    current.innerHTML == "Book Now!" ? current.innerHTML = "Ooops!" : current.innerHTML = "Book Now!";
    ALERT.classList.toggle("hide");
}

//add more actions on a single event
CTA.addEventListener("click", function(e){reveal(e, this)}, false);
CTA.addEventListener("click", function (){console.log("The button was clicked")}, false);

// 'false' is used mostly all the time, 'true' is for more advanced techniques (pilling events on one another)
// reveal must be wrapped around a new function because it has 'current' parameter (if 'e' is the only param it does not have to be mentioned)
// the 'function wrapping' step prevents the actual function from being called when the script is read

// if reveal had no parameters, we should have called it like this:
// CTA.addEventListener("click", reveal, false);
// reveal  without  ()  to prevent it from being called when the script is read



