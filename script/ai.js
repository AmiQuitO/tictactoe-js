let isAIx = undefined;
let useAI = false;
let lookup = true;


function startAI()
{
    useAI = true;
    isAIx = (Math.round(Math.random()) == 1);

    document.querySelector("nav").innerHTML = `You are ${isAIx ? "O" : "X"}`;

    winsXs = 0;
    winsOs = 0;
    restartGame();    

    if(isAIx == isXsTurn){
        console.log("ai zaczyna");  
        aiMove();
    }
}

function AIchooseMove(){
    if(!lookup)
        return checkScore(isSQTaken,isXsTurn);
    else
        return lookupTableMove(isSQTaken);
}

function checkScore(board,xTurn){
    let possibleSquare = undefined;

    for (let index = 0; index < board.length; index++) {
        const square = board[index];        

        console.log(index);

        if (square != false) 
            continue;
        
        let newBoard = [...board];      
        
        let symbol = isAIx ? 'X' : 'O';
        newBoard[index] = symbol;
        
        let won = false;

        won += lineTaken(0,1,2,symbol,newBoard);
        won += lineTaken(3,4,5,symbol,newBoard);
        won += lineTaken(6,7,8,symbol,newBoard);
        won += lineTaken(0,3,6,symbol,newBoard);
        won += lineTaken(1,4,7,symbol,newBoard);
        won += lineTaken(2,5,8,symbol,newBoard);
        won += lineTaken(0,4,8,symbol,newBoard);
        won += lineTaken(6,4,2,symbol,newBoard);

        if (won) {
            return index; 
        }   

        for (let j = 0; j < newBoard.length; j++) {
            const playerSq = newBoard[j];
            
            let newerBoard = [...newBoard];
            
            if (playerSq != false) 
                continue;
                
            let symbol = isAIx ? 'O' : 'X';
            newerBoard[j] = symbol;     
            let lost = 0;       
            
            lost += lineTaken(0,1,2,symbol,newerBoard);
            lost += lineTaken(3,4,5,symbol,newerBoard);
            lost += lineTaken(6,7,8,symbol,newerBoard);
            lost += lineTaken(0,3,6,symbol,newerBoard);
            lost += lineTaken(1,4,7,symbol,newerBoard);
            lost += lineTaken(2,5,8,symbol,newerBoard);
            lost += lineTaken(0,4,8,symbol,newerBoard);
            lost += lineTaken(6,4,2,symbol,newerBoard);
            
            
            if(lost > 1){
                console.log("TRAPPED!");
            }
            if(lost){                
                console.log("lost");
                possibleSquare = j; 
            }
            else
                console.log("not lost");
        }      

    }
    if(possibleSquare)
        return possibleSquare;

    console.log("RANDOM");
    let random;
    while (true) {
        let attempt = Math.round(Math.random()*8);

        if(board[attempt] == false){
           random = attempt;
           break;            
        }
    }
            
    return random;
}


function lookupTableMove(board){
    
    let boardState = board.join("")
    .replaceAll("false"            ,"E") //empty
    .replaceAll(isAIx ? "X":"O"    ,"C") //computer
    .replaceAll(isAIx ? "O":"X"    ,"P"); //player

    let situation;
    for (const element of lookupTable) {  
        let charCount = 0;
        let board;
        for (const char of element.when) {
            if(char == "C" || char == "P" || char == "E"){
                charCount++;
                board += char;
            }
            if(char == "A"){
                board += boardState[charCount];
                charCount++;
            }
        }
        
        if (board.replace(/[\r\n\s]+/g, "").includes(boardState)){
            situation = element;  
            break;
        }
    }

    console.log("Lookup:");
    console.log(situation);

    

    if(situation){
        let index = Math.round(
            Math.random()*(situation.do.length-1)
        )
        return situation.do[index];
    }
    else
        return checkScore(isSQTaken,isXsTurn);

}

function aiMove(){
    
    let SQnumber = AIchooseMove();

    let symbol = isAIx ? 'X' : 'O';

    console.log("SQ NAMBER = "+SQnumber);
    document.querySelector(`#sq${SQnumber}`).innerHTML = symbol;
    isSQTaken[SQnumber] = symbol;

    if(isAIx)
        isXsTurn = false;
    else
        isXsTurn = true;
    movesDone++;
    checkDraw(movesDone);
    posibleWin();
}