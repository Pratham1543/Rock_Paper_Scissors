function getComputerChoice() {
    let rpsChoices = ['Rock', 'Paper', 'Scissors']
    let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
    return computerChoice
  }
 
function getResult(playerChoice, computerChoice) {
    let score;

    if (playerChoice === computerChoice) {
        score = 0
    }
    else if (playerChoice === 'Rock') {
        if (computerChoice === 'Scissors') {
            score = 1
        }
        else {
            score = -1
        }
    }
    else if (playerChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            score = 1
        }
        else {
            score = -1
        }
    }
    else if (playerChoice === 'Scissors') {
        if (computerChoice === 'Paper') {
            score = 1
        }
        else {
            score = -1
        }
    }

    return score
}

function showResult(score, playerChoice, computerChoice) {
    let resultDiv = document.getElementById('result')

    if (score == -1) {
        resultDiv.innerText = 'You lose!'
    }
    else if (score == 0) {
        resultDiv.innerText = 'Its a tie!'
    } else {
        resultDiv.innerText = 'You Won!'
    }

    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    playerScore.innerText = `${Number(playerScore.innerText) + score}`
      hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}
function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice.value, computerChoice)
    
    showResult(score, playerChoice.value, computerChoice)
}

function playGame() {
    let rpsButtons = document.querySelectorAll('.rpsButton')

    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton)
    })

    let endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame()
}

function endGame() {
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
}

playGame()