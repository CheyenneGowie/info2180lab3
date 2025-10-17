document.addEventListener("DOMContentLoaded",function(){
    //code to initialize board
const squares= document.querySelectorAll("#board div");
squares.forEach(square=>{
    square.classList.add("square");
});
console.log("Tic Tac Toe board syled successfully!");
//====Excersise2====
let currentPlayer= "X";
let boardState= Array(9).fill(null);

squares.forEach((square,index)=>{
    square.addEventListener("click",() =>{
        if(!boardState[index]){
            boardState[index]= currentPlayer;
            square.textContent= currentPlayer;
            square.classList.add(currentPlayer);

            currentPlayer= currentPlayer=== "X" ? "O" : "X";
        }
    })
})

//===Excersise 3===
squares.forEach(square => {
    square.addEventListener("mouseenter",() =>{
        square.classList.add("hover");
    });
    square.addEventListener("mouseleave",()=>{
        square.classList.remove("hover");
    });
});
});