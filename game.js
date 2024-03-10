//acessing the user values
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const rollDice = document.querySelector(".btn--roll");
//const newGame = document.querySelector(".btn--new");
const diceRoll = document.querySelectorAll(".dice i");
const player0 = document.querySelector(".player1");
const player1 = document.querySelector(".player2");
const current1 = document.getElementById("current--0");
const hold = document.querySelector(".btn--hold");

//initialize the global values to 0

score0.textContent = 0;
score1.textContent = 0;

let scores = [0, 0];
let current = 0;
let activePlayer = 0;
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
    current = 0;
    document.getElementById(`current--${activePlayer}`).textContent = current;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
  }
});

//implimenting the hhold event for the  button hold
hold.addEventListener("click", holdpoints = () => {
    scores[activePlayer] += current;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer]
})

// newGame.addEventListener("click", () => {
//   dice.classList.add("hidden");
// });
