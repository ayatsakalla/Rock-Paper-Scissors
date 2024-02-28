let playerImg = document.getElementById('playerChoiceImg');
let compImg = document.getElementById('compChoiceImg');


// collecting player username start
let userName = prompt('Enter Username:');
let namez = `${userName}`;
let playerName = document.querySelector('#name');
playerName.innerHTML = `${namez}`;
// collecting player username end

function playRound(userChoice) {
    //get computer choice
    let compChoice
    let randomNum = Math.floor(Math.random()*3);
    //turn randomNum into string value
    if (randomNum === 0) {
        compChoice = 'rock';
    } else if (randomNum===1) {
        compChoice = 'paper';
    } else {
        compChoice = 'scissors';
    }

    //display choices 

    playerImg.src = `${userChoice}.jpg`
    compImg.src = `${compChoice}.jpg`


}
