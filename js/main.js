
const nG = document.querySelector(".newgame");
const currentPlaer = document.querySelector(".player-display");
const tile1 = document.querySelector(".game-tile:nth-child(1)");
const tile2 = document.querySelector(".game-tile:nth-child(2)");
const tile3 = document.querySelector(".game-tile:nth-child(3)");
const tile4 = document.querySelector(".game-tile:nth-child(4)");
const tile5 = document.querySelector(".game-tile:nth-child(5)");
const tile6 = document.querySelector(".game-tile:nth-child(6)");
const tile7 = document.querySelector(".game-tile:nth-child(7)");
const tile8 = document.querySelector(".game-tile:nth-child(8)");
const tile9 = document.querySelector(".game-tile:nth-child(9)");
const save = document.querySelector(".save");
wC = [];
gamesPlayed = 0;
winnsA = 0;
winnsB = 0;

var player = "a";
board = ["z","z","z","z","z","z","z","z","z"];
end = false;

function saveScore(){
  localStorage.setItem("gamesPlayed", gamesPlayed);
  localStorage.setItem("winnsA", winnsA);
  localStorage.setItem("winnsB", winnsB);
  console.log("saving: " + gamesPlayed, winnsA, winnsB);
}

function onPress1(){

  var con = setPlayerOnBoard(this.id, player);

  if(con == false || end == true){
    return;
  }

  if(player === "a"){
    this.style.background = 'red';
    currentPlaer.textContent = "Now Player B"
    player = "b";
  }
  else{
    this.style.background = 'blue';
    currentPlaer.textContent = "Now Player A"
    player = "a";
  }

  checkWinner();
}


function setPlayerOnBoard(str, player){
  var currentPosition = 0;


  switch (str){
    case "0": currentPosition = 0; break;
    case "1": currentPosition = 1; break;
    case "2": currentPosition = 2; break;
    case "3": currentPosition = 3; break;
    case "4": currentPosition = 4; break;
    case "5": currentPosition = 5; break;
    case "6": currentPosition = 6; break;
    case "7": currentPosition = 7; break;
    case "8": currentPosition = 8; break;
  }

  if(board[currentPosition] != "z"){
    return false;
  }

  if(player == "a"){
    board[currentPosition] = "a";
  }else{
    board[currentPosition] = "b";
  }
  return true;

  /*
    console.log("DB:setPlayerOnBoard - currentPosition & Board");
    console.log(currentPosition);
    console.log(board);
  */

}


function newGame(){
  tile1.style.background = 'black';
  tile2.style.background = 'black';
  tile3.style.background = 'black';
  tile4.style.background = 'black';
  tile5.style.background = 'black';
  tile6.style.background = 'black';
  tile7.style.background = 'black';
  tile8.style.background = 'black';
  tile9.style.background = 'black';

  board = ["z","z","z","z","z","z","z","z","z"];

  player = "a";
  end=false;
  gamesPlayed++;
}

function checkWinner(){
  wC[0] = board[0] + board[1] + board[2];
  wC[1] = board[3] + board[4] + board[5];
  wC[2] = board[6] + board[7] + board[8];


  wC[3] = board[0] + board[3] + board[6];
  wC[4] = board[1] + board[4] + board[7];
  wC[5] = board[2] + board[5] + board[8];


  wC[6] = board[0] + board[4] + board[8];
  wC[7] = board[2] + board[6] + board[4];

  for(i=0; i <= 7; i++){
    if (wC[i] == "aaa"){
      console.log("Winner is Player A");
      end=true;
      winnsA++;
    }
    else if(wC[i]== "bbb"){
      console.log("Winner is Player B");
      end=true;
      winnsB++;
    }
  }


}

function printBoard(){
  console.log(board[0] + board[1] + board[2]);
  console.log(board[3] + board[4] + board[5]);
  console.log(board[6] + board[7] + board[8]);

}


tile1.addEventListener("click", onPress1);
tile2.addEventListener("click", onPress1);
tile3.addEventListener("click", onPress1);
tile4.addEventListener("click", onPress1);
tile5.addEventListener("click", onPress1);
tile6.addEventListener("click", onPress1);
tile7.addEventListener("click", onPress1);
tile8.addEventListener("click", onPress1);
tile9.addEventListener("click", onPress1);
nG.addEventListener("click", newGame);
save.addEventListener("click", saveScore);

