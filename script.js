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

// starry bg start
for(let i = 1; i <= 120; i++){
    let sparkles = document.createElement('div');
    sparkles.classList.add('sparkle');
    let size = Math.random() * 20;
    sparkles.style.fontSize = 10 + size + 'px';
    sparkles.style.left = Math.random() * + innerWidth + 'px';
    sparkles.style.top = Math.random() * + innerWidth + 'px';
    document.querySelector('.sec').appendChild(sparkles);
}
function animateSparkles(){
    let AllSparkles = document.querySelectorAll('.sparkle');
    let num = Math.floor(Math.random() * AllSparkles.length);
    AllSparkles[num].classList.toggle('animate');
}
setInterval(animateSparkles, 50);
// starry bg end

// global start
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
// global end

// collecting player username start
let userName = prompt('Enter Username:');
let namez = `${userName}`;
let playerName = document.querySelector('#name');
playerName.innerHTML = `${namez}`;
// collecting player username end

// collecting computer username start 
let compName = prompt('Enter Opponent Name:');
let compNamez = `${compName}`;
let computerName = document.querySelector('#compName');
computerName.innerHTML = `${compNamez}`;
// collecting computer username end 

// displaying computer + player welcome start 
let welcome = `Welcome ${namez} to my game of rock, paper, scissors! Play against ${compNamez}, and try to win. Best of luck!`;
let message = document.querySelector('#welcome');
message.innerHTML = `${welcome}`;
// displaying computer + player welcome end

// actually play the round with userChoice and compChoice
function playRound(userChoice) {

    //get computer choice start 
    let randomNum = Math.floor(Math.random()*3);
    //turn randomNum into string value
    if (randomNum === 0) {
        compChoice = 'rock';
    } else if (randomNum===1) {
        compChoice = 'paper';
    } else {
        compChoice = 'scissors';
    }
    // get random computer choice end 

    // img display choices start
    playerImg.src = `choices/${userChoice}.jpg`;
    compImg.src = `choices/${compChoice}.jpg`;
    //img display choices end

    // user choices and win/loss/tie to comp choices start
    if (userChoice === compChoice) {
        winLossTie.innerHTML = "It's a tie!";
        userChose.innerHTML = `${namez} chose ${userChoice}`;
        compChose.innerHTML = `${compNamez} chose ${compChoice}`;

    } else if (userChoice === 'rock' && compChoice === 'paper') {
        compWin(); 
        userChose.innerHTML = `${namez} Chose Rock`;
        compChose.innerHTML = `${compNamez} Chose Paper`;

    } else if (userChoice === 'rock' && compChoice === 'scissors') {
        userWin();
        userChose.innerHTML = `${namez} Chose Rock`;
        compChose.innerHTML = `${compNamez} Chose Scissors`;

    } else if (userChoice === 'paper' && compChoice === 'scissors') {
        compWin();
        userChose.innerHTML = `${namez} Chose Paper`;
        compChose.innerHTML = `${compNamez} Chose Scissors`;

    } else if (userChoice === 'paper' && compChoice === 'rock') {
        userWin();
        userChose.innerHTML = `${namez} Chose Paper`;
        compChose.innerHTML = `${compNamez} Chose Rock`;

    } else if (userChoice === 'scissors' && compChoice === 'paper') {
        userWin();
        userChose.innerHTML = `${namez} Chose Scissors`;
        compChose.innerHTML = `${compNamez} Chose Paper`;

    } else if (userChoice === 'scissors' && compChoice === 'rock') {
        compWin();
        userChose.innerHTML = `${namez} Chose Scissors`;
        compChose.innerHTML = `${compNamez} Chose Rock`;
    }
    // user choices and win/loss/tie to comp choices start

    // scoreboard for when comp/user wins round start 
    function userWin() {
        userScore++;
        userScoreboard.innerHTML = userScore;
        winLossTie.innerHTML = `${namez} won! Yippee!!`;
    }
    
    function compWin() {
        compScore++;
        compScoreboard.innerHTML = compScore;
        winLossTie.innerHTML = `${compNamez} Won. Womp womp ;(`;
    }

    let winArray = ['Game over. HIP HIP HOORAY YOU WON',
    'Game over. WINNA WINNA CHICKEN DINNA',
    'Game over. YOU DA 🐐',
    'Game over. TOO GOOD TO LOSE'];

    let loseArray = ['Game over. Wow you just lost to a bot', 
    'Game over. Embarrasing you lost!',
    'Game over. Personally, I would never take that loss',
    'Game over. Tough loss, better luck next time!'];

    let rndmNumWin = Math.floor(Math.random()*winArray.length);
    let rndmNumLoss = Math.floor(Math.random()*loseArray.length);

    if (userScore === 3) {
        document.getElementById('winLossTie').innerHTML = winArray[rndmNumWin];
      } else if (compScore === 3) {
        document.getElementById('winLossTie').innerHTML = loseArray[rndmNumLoss];
      }
}

function reset() {
    resetScore();
    document.getElementById('winLossTie').innerHTML = "";
}

function resetScore() {
    userScore = 0;
    compScore = 0; 
    userScoreboard.innerHTML = "0";
    compScoreboard.innerHTML = "0";
}



