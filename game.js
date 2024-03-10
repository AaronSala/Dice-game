//acessing the user values
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const rollDice = document.querySelector(".btn--roll");
const newGame = document.querySelector(".btn--new");
const diceRoll = document.querySelectorAll(".dice i");
const player = document.querySelectorAll(".player");

//initialize the global values to 0

score0.textContent = 0;
score1.textContent = 0;

rollDice.addEventListener("click", () => {
  dice.classList.remove("hidden");

  diceRoll.forEach((die) => {
    die.classList.remove("active");
  });
  let randomIndex = Math.floor(Math.random() * 6);
  let randomDie = diceRoll[randomIndex];
  randomDie.classList.add("active");
  let playescore = player[0].querySelector(".current-score");
  let currentscore = parseInt(playescore.textContent);
  currentscore += randomIndex + 1;
  if (randomIndex == 0) {
    playescore.textContent = 0;
  } else {
    playescore.textContent = currentscore;
  }
});

newGame.addEventListener("click", () => {
  dice.classList.add("hidden");
});
