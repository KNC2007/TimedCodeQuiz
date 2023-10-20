
var startButton = document.querySelector("#startQuiz");
var counter = 75;
var quizQuestionsEl = document.querySelector("#quizQuestions");
var answersEl = document.querySelector("#answers");
var timerEl = document.querySelector("#timer");
var questionIndex = 0;
var answerFeedback = document.querySelector("#rightOrWrong");
var timeInterval = null;
var highScores = [];
var saveScoreButton = document.querySelector("#saveScoreBtn");

var quizQuestions = [ 
  {
    question: "Arrays in JavaScript are defined by which of the following statements?",
    answers: ['It is an ordered list of values.', 'It is an ordered list of objects.', 'It is an ordered list of string.', 'It is an ordered list of functions.'],
  
    correctAnswer: 'It is an ordered list of values.'
  },

  {
    question: "What is JavaScript?",
    answers: ['JavaScript is a scripting language used to make the website interactive.', 'JavaScript is an assembly language used to make the website interactive.', 'JavaScript is a compiled language used to make the website interactive.', 'None of the mentioned.'],
  
    correctAnswer: 'JavaScript is a scripting language used to make the website interactive.'
  },

  {
    question: "Which of the following is correct about JavaScript?",
    answers: ['JavaScript is an Object-Based language.', 'JavaScript is Assembly-language.', 'JavaScript is an Object-Oriented language.', 'JavaScript is a High-level language.'],

    correctAnswer: 'JavaScript is an Object-Based language.'
  },

  {
    question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    answers: ['Position', 'Window', 'Standard', 'Location'],

    correctAnswer: 'Window'
  },

  {
    question: "Which of the following can be used to call a JavaScript Code Snippet?",
    answers: ['Function/Method', 'Preprocessor', 'Triggering Event', 'RMI'],

    correctAnswer: 'Function/Method'
  },

  {
    question: "Where must the script tag must be placed?",
    answers: ['the head tag', 'the head or body', 'the title or head', 'after the body tag'],
    
    correctAnswer: 'the head or body'
  }
];


// GIVEN I am taking a code quiz
// WHEN I click the start button


startButton.addEventListener("click", startQuiz);


function startQuiz() {
  var startScreen = document.getElementById("startScreen")
  startScreen.setAttribute("class", "hide");
  quizQuestionsEl.removeAttribute("class");
  countdown();
  getNextQuestion();
}


// THEN a timer starts and I am presented with a question
// timer start
// show the first question
// get the question right
// get the question wrong

function countdown() {
  timeInterval = setInterval(() => {
    console.log(counter)
    counter--;
    timerEl.textContent = counter + " seconds left";
    if (counter <= 0){
      clearInterval(timeInterval);
      timerEl.textContent = "Sorry, out of time!"
      endQuiz();
    // if (questionIndex === quizQuestions.length) {
    //   clearInterval(timeInterval);
    //   endQuiz();
    // }
    }
  }, 1000);
}


function getNextQuestion() {
  var currentQuestion = quizQuestions[questionIndex];
  var questionTitle = document.getElementById("fullQuestion");
  questionTitle.textContent = currentQuestion.question;
  answersEl.innerHTML = "";
  for (let i = 0; i < currentQuestion.answers.length; i++) {
    const answerChoice = currentQuestion.answers[i];
    console.log(answerChoice);
    const choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", answerChoice);
    choiceButton.textContent = i + 1 + ". " + answerChoice;
    answersEl.appendChild(choiceButton);    
  }
}

answersEl.addEventListener("click", checkAnswer);

// // WHEN I answer a question
// // THEN I am presented with another question

function checkAnswer(event) {
  console.log(event.target);
  var btnEl = event.target;
  if (!btnEl.matches(".choice")) {
    return;
  }
  if (btnEl.value !== quizQuestions[questionIndex].correctAnswer) {
    counter-=10;
    answerFeedback.removeAttribute("class");
    answerFeedback.textContent = "Wrong!";
    timerEl.textContent = counter + " seconds left";
  // // WHEN I answer a question incorrectly
  // // THEN time is subtracted from the clock  
  } else {
    answerFeedback.removeAttribute("class");
    answerFeedback.textContent = "Correct!";
  }
  // // WHEN all questions are answered or the timer reaches 0
  // // THEN the game is over
  questionIndex++;

  if (counter <= 0 || questionIndex === quizQuestions.length) {
    endQuiz();
  } else {
  getNextQuestion();
  }
}

 

// // WHEN the game is over
// // THEN I can save my initials and score


function endQuiz() {
  clearInterval(timeInterval);
  quizQuestionsEl.innerHTML = "";
  var endScreenEl = document.getElementById("quizEnd");
  endScreenEl.removeAttribute("class");
  var finalScoreEl = document.getElementById(finalScore);
  finalScoreEl.textContent = timerEl;


  

}


function saveHighScores () {
  var lastHighScore = JSON.parse(localStorage.getItem('highScores'));
  if (lastHighScore != null) {
    highScores = lastHighScore;    
  }
  var scores = {
    "initials": document.querySelector("#initials").value, 
    "score": counter
  }
  highScores.push(scores);
  localStorage.setItem('highScores', JSON.stringify(highScores));
}

saveScoreButton.addEventListener("click", saveHighScores);



//  var highScores = document.getElementById("quizEnd");



// function displayMessage(){

// }

// function startGame(event){
//   if(event.target.getAttribute("data-start") === "something"){

//   }
//     else{
//       startGame.innerHTML = '';

//       var beginTimer = [ ];
//       event.target.setAttribute("data-start", )

//     }
// }



// startButton.addEventListener('click', startQuiz);

function goBack() {
  window.location.reload();
}