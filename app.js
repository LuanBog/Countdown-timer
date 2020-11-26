//Elements
const countdownTimer = document.querySelector("#countdown-timer");

let seconds = 5;
let minutes = 0;
let hours = 0;

//This makes the time pleasing to read
const beautify = (hours, minutes, seconds) => {
    seconds = seconds >= 0 && seconds <= 9 ? `0${seconds}` : seconds
    minutes = minutes >= 0 && minutes <= 9 ? `0${minutes}` : minutes
    hours = hours >= 0 && hours <= 9 ? `0${hours}` : hours

    return `${hours}:${minutes}:${seconds}`;;
}

//Main countdown function
const countdown = setInterval(() => {
    let timer = beautify(hours, minutes, seconds);

    countdownTimer.innerHTML = timer;

    if(hours === 0 && minutes === 0 && seconds === 0) {
        //This stops the timer everytime it's over
        setTimeout(() => {
            console.log("over!");
        }, 1000);

        clearInterval(countdown);
    } else {
        //This is the main countdown
        if(seconds > 0) {
            seconds--;
        } else {
            if(minutes > 0) {
                seconds = 59;
                minutes--;  
            } else {
                seconds = 59;
                minutes = 59;
                hours--;
            }
        }
    }
}, 1000);
