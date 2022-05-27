//Object players
const players = {
    onePlayer: [],
    twoPlayer: [],
    threePlayer: [],
    fourPlayer: []
}

//Variables text
const txtPlayerOne = document.getElementById("txtName1");
const txtPlayerTwo = document.getElementById("txtName2");
const txtPlayerThree = document.getElementById("txtName3");
const txtPlayerFour = document.getElementById("txtName4");

//Variable button
const btnPlayNow = document.getElementById("btnPlay");

btnPlayNow.addEventListener("click", () => {
    if (txtPlayerOne.value != "" && txtPlayerTwo.value != ""
        && txtPlayerThree.value != "" && txtPlayerFour.value != "") {
        players.onePlayer.push(txtPlayerOne.value);
        players.twoPlayer.push(txtPlayerTwo.value);
        players.threePlayer.push(txtPlayerThree.value);
        players.fourPlayer.push(txtPlayerFour.value);
        startNow();
    }
    if (txtPlayerOne.value == "") {
        txtPlayerOne.style.backgroundColor = "#f76";
    }
    if (txtPlayerTwo.value == "") {
        txtPlayerTwo.style.backgroundColor = "#f76";
    }
    if (txtPlayerThree.value == "") {
        txtPlayerThree.style.backgroundColor = "#f76";
    }
    if (txtPlayerFour.value == "") {
        txtPlayerFour.style.backgroundColor = "#f76";
    }
})