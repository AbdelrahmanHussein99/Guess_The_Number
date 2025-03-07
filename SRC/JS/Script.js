const message = document.querySelector(".message");
const checkbtn = document.querySelector("#check");
const scoreNumber = document.querySelector(".score");
const number = document.querySelector(".number");
const body = document.querySelector("body");
const numberBox = document.querySelector(".num-box");
const again = document.querySelector("#again");
const highScoreEle = document.querySelector(".highscore");
let score = 20;
let highScore = 0;
let disableFlag = true;
const makeRandNum = () => Math.trunc(Math.random() * 20) + 1;
let secretNumber = makeRandNum();

const changeMessageText = function (text) {
  message.textContent = text;
};

checkbtn.addEventListener("click", function () {
  if (disableFlag) {
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
      disableFlag = false;
      number.textContent = secretNumber;
      if (score > highScore) {
        highScore = score;
        highScoreEle.textContent = highScore;
      }
    } else if (guessValue !== secretNumber && score > 1) {
      score--;
      changeMessageText(guessValue > secretNumber ? "too high" : "too low");
      scoreNumber.textContent = score;
    } else {
      changeMessageText("Game over");
      score--;
      disableFlag = false;
      scoreNumber.textContent = 0;
    }
  }
});

again.addEventListener("click", function () {
  secretNumber = makeRandNum();
  body.classList.add("bg-slate-600");
  body.classList.remove("bg-green-600");
  numberBox.classList.add("px-10");
  numberBox.classList.remove("px-16");
  changeMessageText("Start guessing...");
  score = 20;
  scoreNumber.textContent = score;
  number.textContent = "?";
  document.querySelector("#guess").value = "";
  disableFlag = true;
});
