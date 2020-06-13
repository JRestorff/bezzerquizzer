
var score = 0

var currentQuestion = 0

var questions = [
  {
    question: "Who is the German chancelor?",
    answers: ["Angela Merkel", "Helmut Kohl", "Donald Trump", "Heiko Maas"],
    rightAnswer: 0,
  },
  {
    question: "What is the German capital?",
    answers: ["München", "Berlin", "Düsseldorf", "Bonn"],
    rightAnswer: 1,
  },
  {
    question: "What is the most beautiful color in the world?",
    answers: ["Red", "Green", "Blue", "Yellow"],
    rightAnswer: 2,
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

function displayQuestion() {
  var question = questions[currentQuestion].question
  document.getElementById("question-text").innerHTML = question
  var answers = questions[currentQuestion].answers
  for (var i = 1; i < 5; i++) {
    var x = i - 1
    document.getElementById("answer" + i + "-text").innerHTML = answers[x]
  }
}

function submitAnswer() {
  nextQuestion()
  displayQuestion()
}

document.getElementById("start-game").addEventListener("click", displayQuestion)
document.getElementById("question-submitter").addEventListener("click", submitAnswer)
