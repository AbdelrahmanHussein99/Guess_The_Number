const message = document.querySelector(".message");
const scoreNumber = document.querySelector(".score");
const number = document.querySelector(".number");
const body = document.querySelector("body");
const numberBox = document.querySelector(".num-box");
const again = document.querySelector("#again");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const changeMessageText = function (text) {
  message.textContent = text;
};
document.querySelector("#check").addEventListener("click", function () {
  const guessValue = Number(document.querySelector("#guess").value);
  //when no input
  if (!guessValue) {
    changeMessageText("No Number!");
  } else if (guessValue === secretNumber) {
    //when win
    body.classList.remove("bg-slate-600");
    body.classList.add("bg-green-600");
    numberBox.classList.remove("px-10");
    numberBox.classList.add("px-16");
    changeMessageText("Correct Number");
    number.textContent = secretNumber;
  } else if (guessValue > secretNumber && score > 1) {
    //when too high
    changeMessageText("too high");
    score--;
  } else if (guessValue < secretNumber && score > 1) {
    //when too low
    changeMessageText("too low");
    score--;
  } else {
    changeMessageText("Game over");
    score--;
  }
  scoreNumber.textContent = score;
});

again.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  body.classList.add("bg-slate-600");
  body.classList.remove("bg-green-600");
  numberBox.classList.add("px-10");
  numberBox.classList.remove("px-16");
  changeMessageText("Start guessing...");
  score = 20;
  scoreNumber.textContent = score;
  number.textContent = "?";
  document.querySelector("#guess").value = "";
});
