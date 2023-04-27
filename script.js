const startQuizButton = document.getElementById("start-quiz");
const question1 = document.getElementById("question-1");
const submitAnswerButton1 = document.getElementById("submit-answer-1");
const question2 = document.getElementById("question-2");
const submitAnswerButton2 = document.getElementById("submit-answer-2");
const question3 = document.getElementById("question-3");
const submitAnswerButton3 = document.getElementById("submit-answer-3");
const question4 = document.getElementById("question-4");
const submitAnswerButton4 = document.getElementById("submit-answer-4");
const question5 = document.getElementById("question-5");
const submitAnswerButton5 = document.getElementById("submit-answer-5");
const header = document.querySelector("header");
const wrongAnswer = document.getElementById("wrongAnswer");
const timerElement = document.getElementById("time-remaining");
const timer = document.getElementById("timer");
const initialsEl = document.getElementById("initialsSection");
const scoreEl = document.getElementById("finalScore");
const submitBtn = document.getElementById("submit-initials");
const initialsInput = document.getElementById("initials");
let timeRemaining = 75;
let timerInterval;

function updateTimer() {
  timerElement.textContent = `${timeRemaining} seconds`;
  timeRemaining--;
  if (timeRemaining < 0) {
    
    endQuiz();
  }
}
function endQuiz() {
  clearInterval(timerInterval);
  timer.style.display = "none";
  wrongAnswer.style.display = "none";
  initialsEl.style.display = "block";
scoreEl.textContent = timeRemaining;
  // let finalScore;
  // if (timeRemaining > 0) {
  //   finalScore = timeRemaining;
  // } else {
  //   finalScore = 0;
  // }
  // localStorage.setItem("finalScore", finalScore);
  //window.location.href = "highscores.html"
}


startQuizButton.addEventListener("click", function () {
  startQuizButton.style.display = "none";
  timer.style.display = "block";
  header.style.display = "none";
  question1.style.display = "block";
  timerElement.style.display = "block";
  timerInterval = setInterval(updateTimer, 1000);
  updateTimer();

});


submitAnswerButton1.addEventListener("click", function (event) {
  event.preventDefault();
  const answer1 = document.querySelector('input[name="answer-1"]:checked').value;
  console.log(answer1);
  if (answer1 === "booleans") {
    question1.style.display = "none";
    question2.style.display = "block";
  } else {
    wrongAnswer.style.color = "red";
    wrongAnswer.textContent = "Wrong!";
    timeRemaining -= 10;
	setTimeout(()=> {
    wrongAnswer.textContent = "";
    }, 3000)
  }
  
});

submitAnswerButton2.addEventListener("click", function (event) {
  event.preventDefault();
  const answer2 = document.querySelector('input[name="answer-2"]:checked').value;
  console.log(answer2)
  if (answer2 === "parenthesis") {
    question2.style.display = "none";
    question3.style.display = "block";
  } else {
    wrongAnswer.style.color = "red";
    wrongAnswer.textContent = "Wrong!";
    timeRemaining -= 10;
	setTimeout(()=> {
    wrongAnswer.textContent = "";
    }, 3000)
  }
  
});

submitAnswerButton3.addEventListener("click", function (event) {
  event.preventDefault();
  const answer3 = document.querySelector('input[name="answer-3"]:checked').value;
  if (answer3 === "all") {
    question3.style.display = "none";
    question4.style.display = "block";
  } else {
    wrongAnswer.style.color = "red";
    wrongAnswer.textContent = "Wrong!";
    timeRemaining -= 10;
	setTimeout(()=> {
    wrongAnswer.textContent = "";
    }, 3000)
  }
  
});

submitAnswerButton4.addEventListener("click", function (event) {
  event.preventDefault();
  const answer4 = document.querySelector('input[name="answer-4"]:checked').value;
  if (answer4 === "curly-brackets") {
    question4.style.display = "none";
    wrongAnswer.style.display = "none";
    question5.style.display = "block";
  }
  else {
    wrongAnswer.style.color = "red";
    wrongAnswer.textContent = "Wrong!";
    timeRemaining -= 10;
	setTimeout(()=> {
    wrongAnswer.textContent = "";
    }, 3000)
  }
  
});

submitAnswerButton5.addEventListener("click", function (event) {
  event.preventDefault();
  const answer5 = document.querySelector('input[name="answer-5"]:checked').value;
  if (answer5 === "for-loops") {
    question5.style.display = "none";
    wrongAnswer.style.display = "none";
  }
  else {
    wrongAnswer.style.color = "red";
    wrongAnswer.textContent = "Wrong!";
    timeRemaining -= 10;
	setTimeout(()=> {
    wrongAnswer.textContent = "";
    }, 3000)
  }
  
  endQuiz();
});


function submitStuff() {
  var initials = initialsInput.value;
  console.log(initials);
}

submitBtn.addEventListener("click", submitStuff )