const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

let seconds = 5;
let minutes = 0;
let hours = 0;

const countdown = setInterval(() => {
    let timer = `${hours}:${minutes}:${seconds}`;

    console.log(timer);

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
