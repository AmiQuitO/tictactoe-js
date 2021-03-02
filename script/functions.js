let isXsTurn = true;
let isSQTaken =  [false, false, false, false, false, false, false, false, false];
let gameRunning = false;
let winsXs = 0;
let winsOs = 0;
let movesDone = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} //skopiowane z neta UwU

function closeMenu(){
    document.getElementById("menu").style.top = "600px";
}
function openMenu(){
    document.getElementById("menu").style.top = "0px";
}
async function returnMenu(){
    closeMenu();
    document.getElementById("menu").style.transition = "0s";
    document.getElementById("menu").style.top = "-600px";
    document.getElementById("menu").style.transition = "1s";
    await sleep(1000);
    setMainMenu();
    openMenu();
}
function setMainMenu(){
    document.getElementById("menuInfo").innerHTML = `Choose gamemode:`;
    document.getElementById("aiBTN").style.display = "block";
    document.getElementById("twoPlayersBTN").style.display = "block";
    document.getElementById("restartBTN").style.display = "none";
    document.getElementById("menuBTN").style.display = "none";
}
function setGameMenu(){
    document.getElementById("aiBTN").style.display = "none";
    document.getElementById("twoPlayersBTN").style.display = "none";
    document.getElementById("restartBTN").style.display = "block";
    document.getElementById("menuBTN").style.display = "block";
}
function twoPlayerGM(){
    winsXs = 0;
    winsOs = 0;
    restartGame();    
}
function playerWin(playerWin, winsXs, winsOs){
    setGameMenu();
    document.getElementById("menuInfo").innerHTML = `${playerWin}<br>X ${winsXs}:${winsOs} O`;
    openMenu();
    isAIx = undefined;
}
function restartGame(){
    closeMenu();
    isSQTaken =  [false, false, false, false, false, false, false, false, false];
    movesDone = 0;
    let isSQTakenLenght = isSQTaken.length;
    gameRunning = true;
    for (i = 0; i < isSQTakenLenght; i++){
        document.getElementById(`sq${i}`).innerHTML = " ";
        document.getElementById(`sq${i}`).style.color = "#cdcdcd";
    }
}