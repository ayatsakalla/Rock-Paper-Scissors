// mouse cursor trail start
window.addEventListener('mousemove', function(e) {
    var arr = [1, 0.9, 0.8, 0.5, 0.2]; 

    arr.forEach(function(i) {
        var x = (1 - i) * 75; 
        var star = document.createElement('div');

        star.className = 'star';
        star.style.top = e.pageY + Math.round(Math.random() * x - x / 2) + 'px';
        star.style.left = e.pageX + Math.round(Math.random() * x - x / 2) + 'px';
        

        document.body.appendChild(star);

        window.setTimeout(function() {
            document.body.removeChild(star);
        }, Math.round(Math.random() * i * 600));
    });
}, false);
// mouse cursor trail end

// global 
let playerImg = document.getElementById('playerChoiceImg');
let compImg = document.getElementById('compChoiceImg');
let userScore = 0;
let compScore = 0; 
let compChoice = '';
let userChoice = '';
let userChose = document.querySelector('#userChose');
let compChose = document.querySelector('#compChose');
let userScoreboard = document.querySelector('#userScore');
let compScoreboard = document.querySelector('#compScore');


// collecting player username start
let userName = prompt('Enter Username:');
let namez = `${userName}`;
let playerName = document.querySelector('#name');
playerName.innerHTML = `${namez}`;
// collecting player username end
let welcome = `Welcome ${namez} to my game of rock, paper, scissors! Play against the computer, and play best out of three!`;
let message = document.querySelector('#welcome');
message.innerHTML = `${welcome}`;
// displaying player welcome start

// displaying player welcome end


function playRound(userChoice) {
    //get computer choice
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

    playerImg.src = `${userChoice}.jpg`;
    compImg.src = `${compChoice}.jpg`;

    // user choices and win/loss/tie to comp choices
    if (userChoice === compChoice) {
        winLossTie.innerHTML = "It's a tie!";
        userChose.innerHTML = `You chose ${userChoice}`;
        compChose.innerHTML = `Computer chose ${compChoice}`;

    } else if (userChoice === 'rock' && compChoice === 'paper') {
        compWin(); 
        userChose.innerHTML = "You Chose Rock";
        compChose.innerHTML = "Computer Chose Paper";

    } else if (userChoice === 'rock' && compChoice === 'scissors') {
        userWin();
        userChose.innerHTML = "You Chose Rock";
        compChose.innerHTML = "Computer Chose Scissors";

    } else if (userChoice === 'paper' && compChoice === 'scissors') {
        compWin();
        userChose.innerHTML = "You Chose Paper";
        compChose.innerHTML = "Computer Chose Scissors";

    } else if (userChoice === 'paper' && compChoice === 'rock') {
        userWin();
        userChose.innerHTML = "You Chose Paper";
        compChose.innerHTML = "Computer Chose Rock";

    } else if (userChoice === 'scissors' && compChoice === 'paper') {
        userWin();
        userChose.innerHTML = "You Chose Scissors";
        compChose.innerHTML = "Computer Chose Paper";

    } else if (userChoice === 'scissors' && compChoice === 'rock') {
        compWin();
        userChose.innerHTML = "You Chose Scissors";
        compChose.innerHTML = "Computer Chose Rock";
    }
    function userWin() {
        userScore++;
        userScoreboard.innerHTML = userScore;
        winLossTie.innerHTML = "You won! Yippee!!";
    }
    
    function compWin() {
        compScore++;
        compScoreboard.innerHTML = compScore;
        winLossTie.innerHTML = "You Lost. Womp womp ;(";
    }
}
