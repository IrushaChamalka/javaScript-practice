const time = document.getElementById("time")

let secondsElapsed = 0;
let intervel =  null;

function secondCountDown(){
    secondsElapsed++;
    setTime()
}

function padStart(value){
    return String(value).padStart(2,"0")
}

function setTime(){
    const minutes = Math.floor(secondsElapsed/60)
    const seconds = secondsElapsed%60;
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;

}

function startTime(){
    if(intervel) stopTime()
    intervel = setInterval(secondCountDown,1000)
}

function stopTime(){
    clearInterval(intervel)

}

function resetTime(){
    startTime()
    secondsElapsed = 0;
    setTime()

}