
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
    score += 1
    document.getElementById('box-' + score).style.backgroundColor = "red" 
    removeRed()
  } else {
    alert("That is wrong, try again!")
  }
  nextQuestion()
}

function removeRed() {
  for (var i = 0; i < score; i++) {
    document.getElementById('box-' + i).style.backgroundColor = "black"
  }
}

function nextQuestion() {
  if (currentQuestion == numQuestions) {
    currentQuestion = 0
  }  else {
    currentQuestion += 1
  }
}
