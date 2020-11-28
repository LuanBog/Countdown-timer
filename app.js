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
//Start button
const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");

const btns = [addValueHours, addValueMinutes, addValueSeconds, subtractValueHours, subtractValueMinutes, subtractValueSeconds, startBtn];

let seconds = 0;
let minutes = 0;
let hours = 0;
let timing = false;

//Sound
const alarmSound = new Audio();
alarmSound.src = "./sounds/woof.mp3";
alarmSound.loop = true;

//This makes the time pleasing to read
const beautify = (hours_, minutes_, seconds_) => {
    seconds_ = seconds_ >= 0 && seconds_ <= 9 ? `0${seconds_}` : seconds_
    minutes_ = minutes_ >= 0 && minutes_ <= 9 ? `0${minutes_}` : minutes_
    hours_ = hours_ >= 0 && hours_ <= 9 ? `0${hours_}` : hours_

    return `${hours_}:${minutes_}:${seconds_}`;;
}

const updateTime = () => {
    const timer = beautify(hours, minutes, seconds);
    countdownTimer.innerHTML = timer;
}

//Function that gets called everytime the timer is done
const timerOver = () => {
    stopBtn.style.display = "block";    

    alarmSound.play()
}

//Hides all buttons
const hideButtons = () => {
    btns.forEach(btn => {
        btn.style.display = "none";
    });
}

//Shows all buttons
const showButtons = () => {
    btns.forEach(btn => {
        if(btn === startBtn)
            btn.style.display = "block";
        else
            btn.style.display = "inline";    
    });  
}

const changeColorByTime = () => {
    if((hours === 0 && minutes === 0) && seconds <= 3) {
        countdownTimer.style.color = "#c1090c";
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

//Start btn
startBtn.addEventListener("click", () => {
    if(hours === 0 && minutes === 0 && seconds === 0) return;

    if(!timing) {
        console.log("started");
        hideButtons();
        timing = true;

        countdownTimer.style.color = "#11cc08";

        //Main countdown function
        const countdown = setInterval(() => {
            updateTime();
            changeColorByTime();

            if(hours === 0 && minutes === 0 && seconds === 0) {
                //This stops the timer everytime it's over
                setTimeout(() => {
                    timerOver();
                }, 1000);

                timing = false;
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
    }
});

stopBtn.addEventListener("click", () => {
    showButtons();
    stopBtn.style.display = "none";
    alarmSound.pause();
    countdownTimer.style.color = "#000";
});
