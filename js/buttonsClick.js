//functionClick
const questionClick = (points) => {
    if (players.onePlayer.length < 6) {
        players.onePlayer.push(points);
        restartTimer();
        if (players.onePlayer.length == 6) {
            restarPlayer();
        }
    }
    else if (players.twoPlayer.length < 6) {
        players.twoPlayer.push(points);
        restartTimer();
        if (players.twoPlayer.length == 6) {
            restarPlayer();
        }
    }
    else if (players.threePlayer.length < 6) {
        players.threePlayer.push(points);
        restartTimer();
        if (players.threePlayer.length == 6) {
            restarPlayer();
        }
    }
    else if (players.fourPlayer.length < 6) {
        players.fourPlayer.push(points);
        restartTimer();
        if (players.fourPlayer.length == 6) {
            getPoints();
        }
    }
    else {

    }
}
//1click
oneLeft.addEventListener("click", () => {
    if (Math.round(variableColor) == 0) {
        questionClick(seconds);
    }
})
//2click
oneCenter.addEventListener("click", () => {
    if (Math.round(variableColor) == 1) {
        questionClick(seconds);
    }
})
//3click
oneRight.addEventListener("click", () => {
    if (Math.round(variableColor) == 2) {
        questionClick(seconds);
    }
})
//4click
twoLeft.addEventListener("click", () => {
    if (Math.round(variableColor) == 3) {
        questionClick(seconds);
    }
})
//5click
twoCenter.addEventListener("click", () => {
    if (Math.round(variableColor) == 4) {
        questionClick(seconds);
    }
})
//6click
twoRight.addEventListener("click", () => {
    if (Math.round(variableColor) == 5) {
        questionClick(seconds);
    }
})
//7click
threeLeft.addEventListener("click", () => {
    if (Math.round(variableColor) == 6) {
        questionClick(seconds);
    }
})
//8click
threeCenter.addEventListener("click", () => {
    if (Math.round(variableColor) == 7) {
        questionClick(seconds);
    }
})
//9click
threeRight.addEventListener("click", () => {
    if (Math.round(variableColor) == 8) {
        questionClick(seconds);
    }
})