//acessing the user values
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const rollDice = document.querySelector(".btn--roll");
const diceRoll = document.querySelectorAll(".dice i");
const player0 = document.querySelector(".player0");
const player1 = document.querySelector(".player1");
const current1 = document.getElementById("current--0");
const current2 = document.getElementById("current--1");
const hold = document.querySelector(".btn--hold");
const newGame = document.querySelector(".btn--new");
const name1 = document.querySelector('#name--0')
 const name2 = document.querySelector("#name--1");

//initialize the global values to 0


let scores  ;
let current ;
let activePlayer ;

function general() {
  name1.textContent = "PLAYER 1";
  name2.textContent = "PLAYER 2";
  name1.style.color = "#fff";
  name2.style.color = "#fff";
  score0.textContent = 0;
  score1.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  dice.classList.add("hidden");
  rollDice.classList.remove("hidden");
  hold.classList.remove("hidden");
  scores = [0, 0];
  current = 0;
  activePlayer = 0;
}
general()
//switching players
function switchplayer() {
  current = 0;
  document.getElementById(`current--${activePlayer}`).textContent = current;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
}
//impliment the event of roling dice
rollDice.addEventListener("click", () => {
  dice.classList.remove("hidden");

  diceRoll.forEach((die) => {
    die.classList.remove("active");
  });
  //asign the icon mathcing the random number the class active and display it
  let randomIndex = Math.floor(Math.random() * 6);
  let randomDie = diceRoll[randomIndex];
  randomDie.classList.add("active");

  if (randomIndex != 0) {
    current += randomIndex + 1;
    document.getElementById(`current--${activePlayer}`).textContent = current;
  } else {
    switchplayer();
  }
});

//implimenting the hhold event for the  button hold
hold.addEventListener(
  "click",
  (holdpoints = () => {
    scores[activePlayer] += current;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //checking if score is 100
    if (scores[activePlayer] >= 20) {
      //finish the game
      document
        .querySelector(`.player${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player${activePlayer}`)
        .classList.remove("player--active");
      let winner = document.getElementById(`name--${activePlayer}`);
      winner.textContent = "WINNER!!!";
      winner.style.color = "red";
      //remove the dice if winner found
      dice.classList.add("hidden");
      rollDice.classList.add("hidden");
      hold.classList.add("hidden");
    } else {
      switchplayer();
    }
  })
);
//starting a new game
newGame.addEventListener("click", general);
