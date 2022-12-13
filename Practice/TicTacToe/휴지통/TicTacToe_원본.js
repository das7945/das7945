//const 수정을 안할경우 사용하는 명령어

const blocks = document.querySelectorAll(".block");
//TicTacToe의 html문서에서 클래스가 block인 요소를 리스트형식으로 찾아 blocks에 저장한다.
const statusText = document.querySelector("#statusText");
//TicTacToe의 html문서에서 id가 statusText인 요소를 찾아 statusText에 저장한다.
const restartBtn = document.querySelector("#restartBtn");
//TicTacToe의 html문서에서 id가 restartBtn인 요소를 찾아 restartBtn에 저장한다.
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],    // -----------
    [6, 7, 8],    // | 0  1  2 |    
    [0, 3, 6],    // | 3  4  5 |
    [1, 4, 7],    // | 6  7  8 |
    [2, 5, 8],    // -----------
    [0, 4, 8],
    [2, 4, 6]
];
// 각 블럭의 위치를 리스트형식으로 winConditions에 저장한다.
// 모든 조건의 상황을 위해 각 3개의 셀마다 같은 모양의 O,X가 되지 않도록 
// 검사를 하기위한 작업.

let options = ["", "", "", "", "", "", "", "", ""];
// 자리 표시자 배열 9칸이므로 총 9개

let currentPlayer = "X";  //게임 시작 플레이어는 "X"
let running = false; // 현재 게임이 진행중인지 확인할 부울 변수
// 게임을 초기화 할 때는 true전환 (게임이 실행중일 경우 true 상태) 

initializeGame();

function initializeGame() {
    blocks.forEach(block => block.addEventListener("click", blockClicked));
    //각 .blocks을 클릭 할 경우  blockClicked실행
    restartBtn.addEventListener("click", restartGame);
    //restartBtn(재시작)을 누를 
    statusText.textContent = currentPlayer + ' turn';
    //현재 O,X따라 화면에 s turn 출력
    running = true;
}

function blockClicked() {
    const blockIndex = this.getAttribute("blockIndex");
    // 플레이어가 클릭하는 모든 블럭인덱스의 속성을 확인. 

    if (options[blockIndex] != "" || !running) {
        //옵션내의 블럭인덱스를 확인하여 비어있지 않거나 게임이  실행중이 아닌경우 
        //블럭자리에 아무 작업도 하지 않으며,
        return;
        //이프문을 나온다.
    }

    updateblock(this, blockIndex);
    //반대의 경우 업데이트 블럭을 호출하여 블럭인덱스를 확인
    checkWinner();
    //승자를 확인
}

function updateblock(block, index) {
    options[index] = currentPlayer;
    //옵션내의 인덱스를 확인 후 현재플레이어로 설정
    block.textContent = currentPlayer;
    mouseon(block);
}   //원래 클릭한 블럭과 상관없이 동일함 

function mouseon(tag) {
    tag.style.cursor = "url(./p.png) 10 10, auto"


}
function mouseoff(tag) {
    tag.style.cursor = "wait"
}

function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";  // O 참, X 거짓
    statusText.textContent = currentPlayer + ' turn';
    //현재 플레이어가 X와 같다면 O으로 재할당하고
    //그렇지 않다면 X유지 하단의 줄로 내려와 현재 플레이어를 표시
}

function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const blockA = options[condition[0]];
        const blockB = options[condition[1]];
        const blockC = options[condition[2]];

        if (blockA == "" || blockB == "" || blockC == "") {
            //블럭 A,B,C에서 하나라도 빈공간 있을 경우 계속진행
            continue;
        }
        if (blockA == blockB && blockB == blockC) {
            //블럭 A와 블럭 B가 같고 블럭 B와 블럭 C가 같다면 승자가 있음을 의미함.
            roundWon = true;
            //let으로 지정된 roundWon을 true로 바꾸고 for문을 중지
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = currentPlayer + ' wins!';
        running = false;
    }
    else if (!options.includes("")) {
        statusText.textContent = `Draw!`;
        running = false;
    }
    else {
        changePlayer();
    }

}

function restartGame() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = currentPlayer + ' turn';
    blocks.forEach(block => block.textContent = "");
    blocks.forEach(block => mouseoff(block));
    running = true;
    // 리스타트버튼 클릭시 초기화
}