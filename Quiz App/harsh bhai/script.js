let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msgContainer");
let winnerMsg = document.querySelector(".winnerMsg");
let newGame = document.querySelector(".newBtn");
let reset = document.querySelector(".resetBtn");
let turnO = true; //playerX playerY;
let count = 0;

let WinPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const resetBtn = ()=>{
    turnO = true;
    enableBox();
    count = 0;
    msgContainer.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if (turnO == true) {
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        if (count == 9 &&  !isWinner) {
            gameDraw();
        }

    })
});
const gameDraw = ()=>{
    winnerMsg.innerText="Game draw";
    msgContainer.classList.remove("hide");
    disableBox();
}

const disableBox = ()=>{
    for(box of boxes){
        box.disabled= true;
    }
}
const enableBox = () =>{
    for(box of boxes){
        box.disabled= false;
        box.innerText = "";
    }
    turnO = true;

}
const showWinner = (winner) =>{
    winnerMsg.innerText = `congratulation winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}
const checkWinner = () =>{
    for(pattern of WinPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3){
                
                console.log('winner',pos1);
                showWinner(pos1);
            }
        }
    }
} 
newGame.addEventListener("click", resetBtn);






// let boxes = document.querySelectorAll(".box");
// let rstBtn = document.querySelector(".resetBtn");
// let msgContainer = document.querySelector(".msgContainer");
// let winnerMsg = document.querySelector(".winnerMsg");
// let newGame = document.querySelector(".newBtn");
// let reset = document.querySelector(".resetBtn");
// let turnO = true; // playerX playerY;
// let count = 0;

// let WinPattern = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ];

// const resetBtn = () => {
//     turnO = true;
//     enableBox();
//     count = 0;
//     msgContainer.classList.add("hide");
// };

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("box was clicked");
//         if (box.innerText === "") {
//             if (turnO == true) {
//                 box.innerText = "O";
//                 turnO = false;
//             } else {
//                 box.innerText = "X";
//                 turnO = true;
//             }
//             box.disabled = true;
//             count++;

//             let isWinner = checkWinner();
//             if (count == 9 && !isWinner) {
//                 gameDraw();
//             }
//         }
//     });
// });

// const gameDraw = () => {
//     winnerMsg.innerText = "Game draw";
//     msgContainer.classList.remove("hide");
//     disableBox();
// };

// const disableBox = () => {
//     for (box of boxes) {
//         box.disabled = true;
//     }
// };

// const enableBox = () => {
//     for (box of boxes) {
//         box.disabled = false;
//         box.innerText = "";
//     }
//     turnO = true;
// };

// const showWinner = (winner) => {
//     winnerMsg.innerText = `Congratulations! The winner is ${winner}`;
//     msgContainer.classList.remove("hide");
//     disableBox();
// };

// const checkWinner = () => {
//     for (pattern of WinPattern) {
//         let pos1 = boxes[pattern[0]].innerText;
//         let pos2 = boxes[pattern[1]].innerText;
//         let pos3 = boxes[pattern[2]].innerText;

//         if (pos1 != "" && pos2 != "" && pos3 != "") {
//             if (pos1 === pos2 && pos2 === pos3) {
//                 console.log("winner", pos1);
//                 showWinner(pos1);
//                 return true; // Added return statement
//             }
//         }
//     }
//     return false; // Added return statement
// };

// newGame.addEventListener("click", resetBtn);
