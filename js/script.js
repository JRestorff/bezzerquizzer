
var score = 0

var currentQuestion = 0

var questions = [
  {
    question: "Who is the German chancelor?",
    answer: "Angela Merkel",
  },
  {
    question: "What is the German capital?",
    answer: "Berlin",
  },
  {
    question: "What is the most beautiful color in the world?",
    answer: "Blue",
  },
]

var numQuestions = questions.length - 1

function askQuestion() {
  var myCurrentQuestion = questions[currentQuestion].question  
  var myCurrentAnswer = questions[currentQuestion].answer
  var answer = prompt(myCurrentQuestion)
  if (answer == myCurrentAnswer) {    
    moveAhead()   
  } else {
    alert("That is wrong, try again!")
  }
  nextQuestion()
}

function moveAhead() {
  document.getElementById('box-' + score).style.backgroundColor = "black"
  score += 1
  document.getElementById('box-' + score).style.backgroundColor = "red"  
}



function nextQuestion() {
  if (currentQuestion == numQuestions) {
    currentQuestion = 0
  }  else {
    currentQuestion += 1
  }
}

/* Set up an event listener on the submit event, 
which is sent when the user clicks the "Submit" button.
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
*/
/* var form = document.querySelector("form");
var log = document.querySelector("#log");

form.addEventListener("submit", function(event) {
  var data = new FormData(form);
  var output = "";
  for (const entry of data) {
    output = entry[1];
  };
  log.innerText = output;
  event.preventDefault();
}, false);
 */

