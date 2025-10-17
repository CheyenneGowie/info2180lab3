document.addEventListener("DOMContentLoaded",function(){
    //code to initialize board
const squares= document.querySelectorAll("#board div");
squares.forEach(square=>{
    square.classList.add("square");
});
console.log("Tic Tac Toe board syled successfully!");
});