function computerMove(){
    const randomMove = Math.random();
    if (randomMove < 1/3) return 'rock';
    else if (randomMove < 2/3) return 'paper';
    else return 'scissor';
}
console.log(computerMove())
const score = {
    wins: 0,
    losses: 0,
    ties: 0
}
function playGame(playerMove){
    const pickedComputerMove = computerMove();
    let result ='';
    if (playerMove == "rock") {
        switch(pickedComputerMove){
            case "rock":
                score.ties ++;
                result = 'Tie'
                break;
            case "paper":
                score.losses ++;
                result = 'You lose.'
                break;
            case "scissor":
                score.wins ++;
                result = 'You win.'
                break;
        }
    }
    else if (playerMove == "paper"){
        switch(pickedComputerMove){
            case "rock":
                score.wins ++;
                result = 'You win.'
                break;
            case "paper":
                score.ties ++;
                result = 'Tie'
                break;
            case "scissor":
                score.losses ++;
                result = 'You lose.'
                break;
        }
    }
    else {
        switch(pickedComputerMove){
            case "rock":
                score.losses ++;
                result = 'You lose.'
                break;
            case "paper":
                score.wins ++;
                result = 'You win.'
                break;
            case "scissor":
                score.ties ++;
                result = 'Tie'
                break;
        }
    }
    document.querySelector('.outcome').innerHTML = result;
    document.querySelector('.your-computer').innerHTML = `
    You
        <img src="Images/${playerMove}-emoji.png" alt="paper" />        
        <img src="Images/${pickedComputerMove}-emoji.png" alt="scissor" />
    Computer
    `;
    document.querySelector('.result').innerHTML = `
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}
    `;
    

    console.log(score);
}
function resetCount(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    document.querySelector('.result').innerHTML = `
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}
    `;
}
let auto = false;
let id;
function autoPlay(){
    auto = !auto;
    if (auto){
        id = setInterval(function(){
            playGame(computerMove());
        }, 1);
    } else {
        clearInterval(id);
    }
    
}