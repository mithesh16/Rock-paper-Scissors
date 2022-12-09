let score=0
let compscore=0

function getComputerChoice() {
  let index=['Rock','Scissors','Paper'];
 let choice=index[Math.floor(Math.random()*3)]
  return choice 
}

function getResult(user, comp) {
  let score=' '
  if(user===comp){
      score=0;
  }

  else if(user==='Rock'){
    if(comp==='Scissors'){
      score=1;
    }
    else{
      score=-1;
  }
  }
  else if(user==='Scissors'){
    if(comp==='Paper'){
     score=1 
    }
    else{
     score=-1
    }
  }
  else{
    if(comp==='Rock'){
      score=1
    }
    else{
      score=-1

    }
  } 
return score
  
}


function showResult(score, playerChoice, computerChoice) {
  
let resultdiv=document.getElementById('result')

    switch(score){
      case 1:
        resultdiv.innerText="WON"
        break;
      case -1:
        resultdiv.innerText="LOSE"
        break;
      case 0:
        resultdiv.innerText="TIED"
        break;
    }
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  playerScore.innerText =  `${Number(playerScore.innerText) + score}`
    hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
  
  
}



function onClickRPS(playerChoice) {
  let computerchoice=getComputerChoice()
  let score=getResult(playerChoice.value,computerchoice)
  showResult(score,playerChoice.value,computerchoice)
}


function playGame() {
  let rpsbuttons=document.querySelectorAll('.rpsButton')
  rpsbuttons.forEach(rpsbutton=>{
    rpsbutton.onclick=()=>
      onClickRPS(rpsbutton)
  })
  let endgamebutton=document.getElementById('endGameButton')
  endgamebutton.onclick= ()=>endGame()
  
}

  
function endGame() {
  let resultdiv=document.getElementById('result')
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  playerScore.innerText=''
  hands.innerText=''
  resultdiv.innerText=''
}

playGame()