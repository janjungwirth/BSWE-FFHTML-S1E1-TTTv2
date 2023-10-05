

const gpElement = document.querySelector(".games-played");
const playerAElement = document.querySelector(".player-a");
const playerBElement = document.querySelector(".player-b");
const reloadButton = document.querySelector(".reload");
localDat = "Jan";
gamesPlayed = 0;
winnsA =0;
winnsB =0;


function displayData(){
  gpElement.textContent = gamesPlayed;
  playerAElement.textContent = winnsA;
  playerBElement.textContent = winnsB;

  console.log("Displaying...");
}

function reloadScoreboard(){

  console.log("Reloading...");
  gamesPlayed = localStorage.getItem("gamesPlayed");
  winnsA = localStorage.getItem("winnsA");
  winnsB = localStorage.getItem("winnsB");
  /*
    for(i=0; i<=gamesPlayed; i++){
      scoreBoard[i] = getData(i);
    }
    if(gamesPlayed==0){
      testDisplay.textContent = "There were no games played yet!";
    }
  */

  displayData();

}

reloadButton.addEventListener("click", reloadScoreboard);
