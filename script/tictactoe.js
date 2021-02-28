function checkLine(a,b,c,player){
    if (isSQTaken[a] == player && isSQTaken[b] == player  && isSQTaken[c] == player ){
        document.getElementById(`sq${a}`).style.color = "yellow";
        document.getElementById(`sq${b}`).style.color = "yellow";
        document.getElementById(`sq${c}`).style.color = "yellow";

        if(!gameRunning){
            return;
        }
        if(player == "X"){
            winsXs++;
        }
        else if(player == "O"){
            winsOs++;
        }
        playerWin(player+` won!`, winsXs, winsOs);
        console.log(`${player}'s wins!`);
        gameRunning = false;
        // no dobra maticz mi z tym pomogl i co z tego
    }
}
function clickedSQ(SQnumber, SQid){

    if(gameRunning == true){

        if(isSQTaken[SQnumber] == false){
            if (isXsTurn == true){
                SQid.innerHTML = "X";
                isXsTurn = false;
                isSQTaken[SQnumber] = "X";
                movesDone++;
                checkDraw(movesDone);
                posibleWin(SQid);
            }
            else{
                SQid.innerHTML = "O";
                isXsTurn = true;
                isSQTaken[SQnumber] = "O";
                movesDone++;
                checkDraw(movesDone);
                posibleWin(SQid);
            }
        }
        else{}
    }
    else{}
}
function posibleWin(SQid){
    //012
    //345
    //678

    // X's wins
    //horizontal
    checkLine(0,1,2,"X");
    checkLine(3,4,5,"X");
    checkLine(6,7,8,"X");
    //vertical
    checkLine(0,3,6,"X");
    checkLine(1,4,7,"X");
    checkLine(2,5,8,"X");
    //diagonal
    checkLine(0,4,8,"X");
    checkLine(6,4,2,"X");

    //the same for O
    //horizontal
    checkLine(0,1,2,"O");
    checkLine(3,4,5,"O");
    checkLine(6,7,8,"O");
    //vertical
    checkLine(0,3,6,"O");
    checkLine(1,4,7,"O");
    checkLine(2,5,8,"O");
    //diagonal
    checkLine(0,4,8,"O");
    checkLine(6,4,2,"O");
}
function checkDraw(movesDone){
    console.log(movesDone);
    if(movesDone == 9){
        playerWin("Draw", winsXs, winsOs);
    }
}