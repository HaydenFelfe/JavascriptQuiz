const startQuizButton = document.getElementById("start-quiz");
const question1 = document.getElementById("question-1");
const submitAnswerButton1 = document.getElementById("submit-answer-1");
const question2 = document.getElementById("question-2");
const submitAnswerButton2 = document.getElementById("submit-answer-2");
const header = document.querySelector("header");
const wrongAnswer = document.getElementById("wrongAnswer");


startQuizButton.addEventListener("click", function() {
  startQuizButton.style.display = "none";
  header.style.display = "none";
  question1.style.display = "block"; 
});

submitAnswerButton1.addEventListener("click", function(event) {
  event.preventDefault();
const answer1 = document.querySelector('input[name="answer-1"]:checked').value;
console.log(answer1);
if (answer1 === "booleans") {
  question1.style.display = "none";
  question2.style.display = "block";
}
else if (answer1 === "alerts"){
wrongAnswer.textContent = "wrong";
}

});

submitAnswerButton2.addEventListener("click", function(event) {
  event.preventDefault();
  const answer2 = document.querySelector('input[name="answer-2"]:checked').value;
  if (answer2 === "parenthesis") {
    question2.style.display = "none";
    question3.style.display = "block";
  } else {
   
  }
});
