//variables divsPointsStadistics
const resultPlayerOne = document.getElementById("resultPlayerOne");
const resultPlayerTwo = document.getElementById("resultPlayerTwo");
const resultPlayerThree = document.getElementById("resultPlayerThree");
const resultPlayerFour = document.getElementById("resultPlayerFour");

//variable namePlayers
const lblP1player = document.getElementById("lblP1player");
const lblP2player = document.getElementById("lblP2player");
const lblP3player = document.getElementById("lblP3player");
const lblP4player = document.getElementById("lblP4player");

//variableButton Reset
const btnReset = document.getElementById("btnReset");

//variables sumPoints
let pointsOne = 0;
let pointsTwo = 0;
let pointsThree = 0;
let pointsFour = 0;

//getPoints player
const getPoints = () => {
    for (i = 1; i < 6; i++) {
        pointsOne += players.onePlayer[i];
        pointsTwo += players.twoPlayer[i];
        pointsThree += players.threePlayer[i];
        pointsFour += players.fourPlayer[i];
    }
    getPorcent();
}

//getPorcent data
const getPorcent = () => {
    pointsOne = pointsOne / .5;
    pointsTwo = pointsTwo / .5;
    pointsThree = pointsThree / .5;
    pointsFour = pointsFour / .5;
    giveColor();
}

//giveColor and viewButton
const giveColor = () => {
    //variables namesPlayes
    let namePlayerOne = players.onePlayer[0];
    let namePlayerTwo = players.twoPlayer[0];
    let namePlayerThree = players.threePlayer[0];
    let namePlayerFour = players.fourPlayer[0];
    //
    resultPlayerOne.style.backgroundColor = "#3d5";
    resultPlayerOne.style.height = pointsOne + "%";
    lblP1player.innerHTML = "" + namePlayerOne;
    //
    resultPlayerTwo.style.backgroundColor = "#3d5";
    resultPlayerTwo.style.height = pointsTwo + "%";
    lblP2player.innerHTML = "" + namePlayerTwo;
    //
    resultPlayerThree.style.backgroundColor = "#3d5";
    resultPlayerThree.style.height = pointsThree + "%";
    lblP3player.innerHTML = "" + namePlayerThree;
    //
    resultPlayerFour.style.backgroundColor = "#3d5";
    resultPlayerFour.style.height = pointsFour + "%";
    lblP4player.innerHTML = "" + namePlayerFour;
    //
    btnReset.style.display = "block";
}

//event ButtonReset
btnReset.addEventListener("click", () => {
    document.location.reload();
})