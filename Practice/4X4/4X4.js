const block = document.querySelectorAll(".block");
const options = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
const startBtn = document.querySelector("#starBtn");


let num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let win = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0'

let currentPlayer
let running = false;


// initializeGame();
randomNum()

// function initializeGame() {
//     let running = true;
//     startBtn = addEventListener("click", startGame);
     
// };



function randomNum() {
    num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let i = 0;
    while(i < 15) {
        let r = ran();
        if(num.includes(r)){
        }
        else{
            num[i] = r;
           i++; 
        }
    }
    document.querySelectorAll(".block").forEach((value, index) => value.innerText = num[index])
    document.querySelectorAll(".block").forEach((value, index) => value.addEventListener("click", click))
}

// Array.prototype.forEach = function(fn) {
//     for(let i in this) {
//         fn(this[i], i)
//     }
// }

function click() {
    let i = parseInt(this.id);
    if(num[i+1] == 0) {
        num[i+1] = num[i];
        num[i] = 0;
        console.log("+1")
    }else if(num[i-1] == 0) {
        num[i-1] = num[i];
        num[i] = 0;
        console.log("-1")
    }else if(num[i+4] == 0) {
        num[i+4] = num[i];
        num[i] = 0;
        console.log("+4")
    }else if(num[i-4] == 0) {
        num[i-4] = num[i];
        num[i] = 0;
        console.log("-4")
    }
    document.querySelectorAll(".block").forEach((value, index) => value.innerText = num[index]) // 배열 정보랑 버튼이랑 매칭
    
    if(num.toString() == win) {
        setTimeout(() => {
            alert("Win!")
            randomNum();
        }, 1000);
    }
}

function ran() { // 1~15
    return (Math.floor(Math.random()*15)+1);
}