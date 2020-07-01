
var score = 0

var currentQuestion = 0

var currentAnswer

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
  // Display the question.
  var questionText = questions[currentQuestion].question
  document.getElementById("question-text").innerHTML = questionText
  // Display the answers.
  var answers = questions[currentQuestion].answers
  for (var i = 1; i < 5; i++) {
    var x = i - 1
    document.getElementById("answer" + i + "-text").innerHTML = answers[x]
  }
}

function submitAnswer() {
  console.log("current: " + currentAnswer)
  console.log("correct: " + questions[currentQuestion].rightAnswer)
  if (currentAnswer == questions[currentQuestion].rightAnswer) {
    moveAhead()
  }
  nextQuestion()
  uncheckAll()
  displayQuestion()
}

function uncheckAll() {  
  for (var i = 1; i < 5; i++) {    
    document.getElementById("answer" + i).checked = false
  }
}

function uncheckOthers(currentClick) {
  for (var i = 1; i < 5; i++) {
    if (i != currentClick) {
      document.getElementById("answer" + i).checked = false
    }    
  }
}

function makeButtonClickable() {
  var checkedAnswer = false
  for (var i = 1; i < 5; i++) {    
    if (document.getElementById("answer" + i).checked) {
      checkedAnswer = true
    }
  }
  document.getElementById("question-submitter").disabled = !checkedAnswer
}


document.getElementById("start-game").addEventListener("click", displayQuestion)
document.getElementById("question-submitter").addEventListener("click", submitAnswer)

document.getElementById("answer1").addEventListener("click", function() {
  uncheckOthers(1)
  makeButtonClickable()
  currentAnswer = 0
})
document.getElementById("answer2").addEventListener("click", function() {
  uncheckOthers(2)
  makeButtonClickable()
  currentAnswer = 1
})
document.getElementById("answer3").addEventListener("click", function() {
  uncheckOthers(3)
  makeButtonClickable()
  currentAnswer = 2
})
document.getElementById("answer4").addEventListener("click", function() {
  uncheckOthers(4)
  makeButtonClickable()
  currentAnswer = 3
})