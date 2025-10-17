document.addEventListener("DOMContentLoaded",function(){
    //code to initialize board
const squares= document.querySelectorAll("#board div");
squares.forEach(square=>{
    square.classList.add("square");
});
console.log("Tic Tac Toe board styled successfully!");
//====Excercise2====
let currentPlayer= "X";
let boardState= Array(9).fill(null);
const statusDiv = document.getElementById("status");

const winningCombos =[
    [0,1,2],[3,4,5],[6,7,8], //combo for rows
    [0,3,6],[1,4,7],[2,5,8], //combo for columns
    [0,4,8],[2,4,6]
];

function checkWinner(){
    for (let combo of winningCombos){
        const[a,b,c]= combo;
        if (boardState[a]&& boardState[a]=== boardState[b] && boardState[a]=== boardState[c]){
            statusDiv.textContent = `Congratulations! ${boardState[a]} is the Winner!`;
            statusDiv.classList.add("you-won");
            return true;
        }
    }
    return false;
}
let gameOver= false;

squares.forEach((square,index)=>{
    square.addEventListener("click",() =>{
        if(!boardState[index] && !gameOver){ //stop click after winner is declared
            boardState[index]= currentPlayer;
            square.textContent= currentPlayer;
            square.classList.add(currentPlayer);

            if (checkWinner()){
                gameOver= true;
            } else{
                currentPlayer= currentPlayer=== "X" ? "O" : "X";
            }

           
        }
    })
})

//===Excersise 3===
squares.forEach(square => {
    square.addEventListener("mouseenter",() =>{
        if (!square.textContent) square.classList.add("hover");
    });
    square.addEventListener("mouseleave",()=>{
        square.classList.remove("hover");
    });
});

// New Game button

const newGameBtn = document.querySelector(".btn");

newGameBtn.addEventListener("click",() => {
    boardState.fill(null);

    squares.forEach(square => {
        square.textContent = "";
        square.classList.remove("X","O","hover");
    });

    // Reset message
    statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
    statusDiv.classList.remove("you-won");

    //reset player and game-over indication
    currentPlayer= "X";
    gameOver = false;
});
});