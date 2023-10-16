// GIVEN I am taking a code quiz
// WHEN I click the start button
// var startButton = document.querySelector(#startTimerButton)
// var startGame = document.querySelector(#startScreen)
// var score = 0

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var quizQuestions = document.querySelector(#quizQuestions);




var quizQuestions = [ 
  {
    question: "Arrays in JavaScript are defined by which of the following statements?",
    answers: {
      a: "It is an ordered list of values.",
      b: "It is an ordered list of objects.",
      c: "It is an ordered list of string.",
      d: "It is an ordered list of functions.",
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


// function begin(event){
//   if(event.target.getAttribute("data-start") === "something"){

//   }
//     else{
//       startGame.innerHTML = '';

//       var beginTimer = [ ];
//       event.target.setAttribute("data-start", )

//     }
// }

// THEN a timer starts and I am presented with a question


startQuiz();

submitButton.addEventListener('click', showResults);




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

// function countdown() {
//   var timeLeft = 5;

//   // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var timeInterval = setInterval(function () {
//     timeLeft --;
//     // console.log(timeLeft);
//     timerEl.textContent = timeLeft + " seconds left";

//     if (timeLeft <= 0){
//       clearInterval(timeInterval);
//       timerEl.textContent = ""
//       displayMessage()
//     }
//   }, 1000);
// }

// // Displays the message one word at a time
// function displayMessage() {
//   var wordCount = 0;

//   // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var msgInterval = setInterval(function () {
//     // If there are no more words left in the message
//     if (words[wordCount] === undefined) {
//       // Use `clearInterval()` to stop the timer
//       clearInterval(msgInterval);
//     } else {
//       // Display one word of the message
//       mainEl.textContent = words[wordCount];
//       wordCount++;
//     }
//   }, 1000);
// }

// countdown();


// // from tom's slack
// <!DOCTYPE html>
// <html lang="en">
// ​
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// ​
// <body>
//     <div>Press Start to begin!
//         <ul id="timer">
//         </ul>
//     </div>
//     <button id="startTimer" class="button">Start</button>
//     <button id="addTime" class="button">Add 5 Seconds</button>
//     <button id="stopTimer" class="button">Stop and Clear Timer!</button>
//     <script>
// ​
//         // what are these called?
//         var timerEL = document.querySelector("#timer");
//         var startBTN = document.querySelector("#startTimer");
//         var addBTN = document.querySelector("#addTime");
//         var stopBNT = document.querySelector("#stopTimer");
// ​
//         // what is the scope of these variables and why?
//         var timeLeft;
//         var countdown;
// ​
//         function startTimer() {
//             // am I declaring a new variable?
//             timeLeft = 10;
// ​
//             // What is setInterval and how is it different than setTimeout? 
//             // what do we call the "function()" inside the setInterval?
//             countdown = setInterval(function () {
//                 // CREATE
//                 var liEL = document.createElement("li");
//                 // MODIFY
//                 liEL.textContent = timeLeft;
//                 // APPEND
//                 timerEL.append(liEL);
// ​
//                 // decrease our timer by 1
//                 timeLeft--;
// ​
//                 // if our timer is less than 0, stop the timer!
//                 if (timeLeft < 0) {
//                     clearInterval(countdown)
//                 }
//                 // How often does our interval run?
//             }, 1000);
//         }
// ​
//         function addTime() {
//             timeLeft += 5;
//         }
// ​
//         // what does this function do? What does "innerHTML" do when set to an empty string?
//         function stopTimer() {
//             timerEL.innerHTML = ""
//             clearInterval(countdown)
//         }
// ​
//         // What happens when you click buttons?
//         startBTN.addEventListener("click", startTimer);
//         addBTN.addEventListener("click", addTime);
//         stopBNT.addEventListener("click", stopTimer);
//     </script>
// </body>
// ​
// </html>