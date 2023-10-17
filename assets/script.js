// GIVEN I am taking a code quiz
// WHEN I click the start button
var startButton = document.querySelector("#startQuiz");
// var startQuiz = document.querySelector(#startScreen)
// var score = 0

var quizQuestionsEl = document.querySelector("#quizQuestions");
var answersEl = document.querySelector("#answers");
var timerEl = document.querySelector("#timer");
var questionIndex = 0;




var quizQuestions = [ 
  {
    question: "Arrays in JavaScript are defined by which of the following statements?",
    answers: [{'a': 'It is an ordered list of values.'}, 
    {'b': 'It is an ordered list of objects.'}, 
    {'c': 'It is an ordered list of string.'},
    {'d': 'It is an ordered list of functions.'}]
      
    },
    correctAnswer: "a"
  },
  {
    question: "What is JavaScript?",
    answers: {
      a: "JavaScript is a scripting language used to make the website interactive.",
      b: "JavaScript is an assembly language used to make the website interactive.",
      c: "JavaScript is a compiled language used to make the website interactive.",
      d: "None of the mentioned.",
    },
    correctAnswer: "a"
  },
  {
    question: "Which of the following is correct about JavaScript?",
    answers: {
      a: "JavaScript is an Object-Based language.",
      b: "JavaScript is Assembly-language.",
      c: "JavaScript is an Object-Oriented language.",
      d: "JavaScript is a High-level language.",
    },
    correctAnswer: "a"
  },
  {
    question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    answers: {
      a: "Position",
      b: "Window",
      c: "Standard",
      d: "Location",
    },
    correctAnswer: "b"
  },
  {
    question: "Which of the following can be used to call a JavaScript Code Snippet?",
    answers: {
      a: "Function/Method",
      b: "Preprocessor",
      c: "Triggering Event",
      d: "RMI",
    },
    correctAnswer: "a"
  },
  {
    question: "Where must the script tag must be placed?",
    answers: {
      a: "the head tag",
      b: "the head or body",
      c: "the title or head",
      d: "after the body tag",
    },
    correctAnswer: "b"
  }
];


// function startGame(event){
//   if(event.target.getAttribute("data-start") === "something"){

//   }
//     else{
//       startGame.innerHTML = '';

//       var beginTimer = [ ];
//       event.target.setAttribute("data-start", )

//     }
// }

// THEN a timer starts and I am presented with a question

startButton.addEventListener("click", startQuiz);


function startQuiz() {
  var startScreen = document.getElementById("startScreen")
  startScreen.setAttribute("class", "hide");
  quizQuestionsEl.removeAttribute("class");
  countdown();
  getNextQuestion();
}

// timer start
// show the first question
// get the question right
// get the question wrong

function countdown() {
  var counter = 75;
  // var timeLeft = 75;
  var timeInterval = setInterval(() => {
    console.log(counter)
    counter--;
    // console.log(timeLeft);
    timerEl.textContent = counter + " seconds left";
    if (counter <= 0){
      clearInterval(timeInterval);
      timerEl.textContent = "Sorry, out of time!"
      displayMessage()
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
    const choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.textContent = answerChoice;
    answersEl.appendChild(choiceButton);    
  }

}


// // WHEN I answer a question
// // THEN I am presented with another question
// for(var i=0; i < questions.length; i++{

// })

// // WHEN I answer a question incorrectly
// // THEN time is subtracted from the clock
// // WHEN all questions are answered or the timer reaches 0
// // THEN the game is over
// // WHEN the game is over
// // THEN I can save my initials and score





// // timer
// var timerEl = document.getElementById('countdown');
// var mainEl = document.getElementById('main');

// var message =
//   'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
// var words = message.split(' ');



function displayMessage(){

}



// countdown();

// startQuiz();

startButton.addEventListener('click', startQuiz);