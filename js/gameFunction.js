//Variables colorRandom
let colorRandom1 = 0;
let colorRandom2 = 0;
let colorRandom3 = 0;
let colorRandom4 = 0;
let colorRandom5 = 0;
let colorRandom6 = 0;
let colorRandom7 = 0;
let colorRandom8 = 0;
let colorRandom9 = 0;

let colorsRandom = [];

let variableColor = 0;

const changeColor = () => {
    colorRandom1 = Math.random(100) * 999;
    colorRandom2 = Math.random(100) * 999;
    colorRandom3 = Math.random(100) * 999;
    colorRandom4 = Math.random(100) * 999;
    colorRandom5 = Math.random(100) * 999;
    colorRandom6 = Math.random(100) * 999;
    colorRandom7 = Math.random(100) * 999;
    colorRandom8 = Math.random(100) * 999;
    colorRandom9 = Math.random(100) * 999;

    //arrayColorsRandom
    colorsRandom = [
        Math.round(colorRandom1),
        Math.round(colorRandom2),
        Math.round(colorRandom3),
        Math.round(colorRandom4),
        Math.round(colorRandom5),
        Math.round(colorRandom6),
        Math.round(colorRandom7),
        Math.round(colorRandom8),
        Math.round(colorRandom9)
    ]

    //colorRandom divColor
    variableColor = Math.random(0) * 8;
}

//Varibales divsClickColor
const oneLeft = document.getElementById("oneLeft");
const oneCenter = document.getElementById("oneCenter");
const oneRight = document.getElementById("oneRight");
const twoLeft = document.getElementById("twoLeft");
const twoCenter = document.getElementById("twoCenter");
const twoRight = document.getElementById("twoRight");
const threeLeft = document.getElementById("threeLeft");
const threeCenter = document.getElementById("threeCenter");
const threeRight = document.getElementById("threeRight");

const colorFunct = () => {
    changeColor();
    oneLeft.style.backgroundColor = "#" + Math.round(colorRandom1);
    oneCenter.style.backgroundColor = "#" + Math.round(colorRandom2);
    oneRight.style.backgroundColor = "#" + Math.round(colorRandom3);
    twoLeft.style.backgroundColor = "#" + Math.round(colorRandom4);
    twoCenter.style.backgroundColor = "#" + Math.round(colorRandom5);
    twoRight.style.backgroundColor = "#" + Math.round(colorRandom6);
    threeLeft.style.backgroundColor = "#" + Math.round(colorRandom7);
    threeCenter.style.backgroundColor = "#" + Math.round(colorRandom8);
    threeRight.style.backgroundColor = "#" + Math.round(colorRandom9);
    colorChange.style.backgroundColor = "#" + colorsRandom[Math.round(variableColor)];
}