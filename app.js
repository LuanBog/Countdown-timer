//Elements
const countdownTimer = document.querySelector("#countdown-timer");
//Adding buttons
const addValueHours = document.querySelector("#add-value-hours");
const addValueMinutes = document.querySelector("#add-value-minutes");
const addValueSeconds = document.querySelector("#add-value-seconds");
//Reduce buttons
const subtractValueHours = document.querySelector("#subtract-value-hours");
const subtractValueMinutes = document.querySelector("#subtract-value-minutes");
const subtractValueSeconds = document.querySelector("#subtract-value-seconds");

let seconds = 0;
let minutes = 0;
let hours = 0;

//This makes the time pleasing to read
const beautify = (hours_, minutes_, seconds_) => {
    seconds_ = seconds_ >= 0 && seconds_ <= 9 ? `0${seconds_}` : seconds_
    minutes_ = minutes_ >= 0 && minutes_ <= 9 ? `0${minutes_}` : minutes_
    hours_ = hours_ >= 0 && hours_ <= 9 ? `0${hours_}` : hours_

    return `${hours_}:${minutes_}:${seconds_}`;;
}

const updateTime = () => {
    let timer = beautify(hours, minutes, seconds);

    countdownTimer.innerHTML = timer;
}

//Main countdown function
const countdown = () => {
    updateTime();

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
}

//Add & Subtract buttons
addValueSeconds.addEventListener("click", () => {
    if(seconds < 59) {
        seconds++;
        updateTime();
    }
});
addValueMinutes.addEventListener("click", () => {
    if(minutes < 59) {
        minutes++;
        updateTime();
    }
});
addValueHours.addEventListener("click", () => {
    if(hours < 59) {
        hours++;
        updateTime();
    }
});

subtractValueSeconds.addEventListener("click", () => {
    if(seconds > 0) {
        seconds--;
        updateTime();
    }
});
subtractValueMinutes.addEventListener("click", () => {
    if(minutes > 0) {
        minutes--;
        updateTime();
    }
});
subtractValueHours.addEventListener("click", () => {
    if(hours > 0) {
        hours--;
        updateTime();
    }
});

