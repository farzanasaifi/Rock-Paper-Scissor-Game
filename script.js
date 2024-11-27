let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const rock = document.querySelector("rock");
const paper = document.querySelector("paper");
const scissors = document.querySelector("scissors");
const msg = document.querySelector("#msg");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
   const randIdx = Math.floor(Math.random()*3);
   return options[randIdx];

}
const drawGame = () =>{
    console.log("Game was Draw!");
    msg.innerText = "Game was Draw!";
};

const showWinner = (userWin) =>{
    if (userWin){
        console.log("You beat Computer!");
        msg.innerText = "Your beat Computer!";
    }else {
        console.log("Computer beats You!");
        msg.innerText = "Computer beats You!";
    }
    
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = " , compChoice);

    if (userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            userWin = compChoice ==="scissor" ? false: true;
        }else if(userChoice ==="scissor"){
            userWin = userChoice ==="rock" ? false: true;
        }
        showWinner(userWin);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
      const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });

});