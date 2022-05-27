//variables divs
const divRegister = document.getElementById("registerDiv");
const colorChange = document.getElementById("colorChange");
const colorView = document.getElementById("colorView");
const timeNextPlayer = document.getElementById("timeNextPlayer");
const classClick = document.querySelectorAll(".classClick");

//lblTimenextPlayer
const lblTimeNextPlayer = document.getElementById("lblTimeNextPlayer");

//varibale milisencos
let miliSeconds = 0;
let seconds = 0;

//varibale label seconds
const txtmiliSeconds = document.getElementById("txtmiliSeconds");
const txtSeconds = document.getElementById("txtSeconds");

//Variable nextPlayer
let variableNextPlayer = 3;

//Function ++seconds
const sumMilis = () => {
    miliSeconds++
    if (miliSeconds > 99) {
        seconds++
        miliSeconds = 0;
        txtSeconds.innerHTML = seconds
    }
    txtmiliSeconds.innerHTML = miliSeconds
    if (seconds == 99) {
        seconds = 0;
    }
    if (variableNextPlayer < 3) {
        colorView.style.backgroundColor = "blueviolet";
    }
    else {
        colorView.style.backgroundColor = "#" + miliSeconds + seconds;
    }
}

//setTimeOut miliSeconds
const milisecFunction = () => {
    setTimeout(() => {
        sumMilis();
    })
}

//Function timeRest
const timeRest = () => {
    if (lblTimeNextPlayer.innerHTML == "1") {
        clearTimeout();
        timeNextPlayer.style.display = "none";
        divRegister.style.display = "none";
        colorChange.style.display = "block";
        variableNextPlayer = 3;
        setInterval(milisecFunction, 10);
        colorFunct();
    }
    else {
        variableNextPlayer--;
        lblTimeNextPlayer.innerHTML = "" + variableNextPlayer;
        startNow();
    }
}

//function starNow
const startNow = () => {
    timeNextPlayer.style.display = "block";
    colorChange.style.display = "none";
    divRegister.style.display = "none";
    seconds = 0;
    miliSeconds = 0;
    txtSeconds.innerHTML = "00";
    txtmiliSeconds.innerHTML = "00";
    setTimeout(() => {
        timeRest();
    }, 1000)
}

//functionReturnTime
const restartTimer = () => {
    miliSeconds = 0;
    seconds = 0;
    txtSeconds.innerHTML = "00";
    txtmiliSeconds.innerHTML = "00";
    colorFunct();
}

//restartPlayer
const restarPlayer = () => {
    lblTimeNextPlayer.innerHTML = "3";
    startNow();
}