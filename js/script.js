
var gamePlaying = false

var score = 0

var winningScore = 3

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
  {
    question: "In what year was Tom Hanks born?",
    answers: [
      1942,
      1968,
      1956,
      1971
    ],
    rightAnswer: 2
  },
  {
    question: "What year was King Vidor born in?",
    answers: [
      1894,
      1906,
      1880,
      1883
    ],
    rightAnswer: 0
  },
  {
    question: "In which year was Nicole Kidman born?",
    answers: [
      1987,
      1974,
      1989,
      1967
    ],
    rightAnswer: 3
  },
  {
    question: "In which year was Jennifer Lopez born?",
    answers: [
      1964,
      1965,
      1956,
      1969
    ],
    rightAnswer: 3
  },
  {
    question: "What year was Adriano Giannini born in?",
    answers: [
      1941,
      1980,
      1971,
      1994
    ],
    rightAnswer: 2
  },
  {
    question: "What was the year in which King Vidor died?",
    answers: [
      1960,
      1986,
      1982,
      2005
    ],
    rightAnswer: 2
  },
  {
    question: "What year was Janet Jackson born in?",
    answers: [
      1939,
      1965,
      1966,
      1959
    ],
    rightAnswer: 2
  },
  {
    question: "In which year was Zbigniew Rybczynski born?",
    answers: [
      1949,
      1937,
      1943,
      1968
    ],
    rightAnswer: 0
  },
  {
    question: "In which year was Christine Lakin born?",
    answers: [
      1973,
      1965,
      1980,
      1979
    ],
    rightAnswer: 3
  },
  {
    question: "What year was Cicely Tyson born in?",
    answers: [
      1924,
      1935,
      1949,
      1923
    ],
    rightAnswer: 0
  }
]

var numQuestions = questions.length - 1

function moveAhead() {
  document.getElementById('box-' + score).style.backgroundColor = "black"
  score += 1
  document.getElementById('box-' + score).style.backgroundColor = "red"
}


function nextQuestion() {
  if (currentQuestion == numQuestions) {
    currentQuestion = 0
  } else {
    currentQuestion += 1
  }
}


function makeQuestionVisible() {
  var questionBox = document.getElementsByClassName('c1')[0].getElementsByTagName('*')
  for (var i = 0; i < questionBox.length; i++) {
    questionBox[i].style.visibility = 'visible'
  }
}


function declareWinner() {
  var questionBox = document.getElementsByClassName('c1')[0].getElementsByTagName('*')
  for (var i = 0; i < questionBox.length; i++) {
    if (questionBox[i].id == "question-text") {
      questionBox[i].innerHTML = "You won"
    } else {
      questionBox[i].style.visibility = 'hidden'
    }    
  }
  gamePlaying = false
  controlStartGameButton()
}

function controlStartGameButton() {
  if (gamePlaying) {
    document.getElementById("start-game").classList.add('unclickable-button')
    document.getElementById("start-game").classList.remove
    ('clickable-button')    
    document.getElementById("start-game").disabled = true
  } else {
    document.getElementById("start-game").classList.add('clickable-button')
    document.getElementById("start-game").classList.remove('unclickable-button')  
    document.getElementById("start-game").disabled = false  
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


function startGame() {
  gamePlaying = true
  score = 0
  currentQuestion = 0  
  makeQuestionVisible()
  displayQuestion()
  uncheckAll()  
  controlStartGameButton()
}


function submitAnswer() {
  console.log("current: " + currentAnswer)
  console.log("correct: " + questions[currentQuestion].rightAnswer)
  if (currentAnswer == questions[currentQuestion].rightAnswer) {
    moveAhead()
  }
  if (score >= winningScore) {
    declareWinner()
  } else {
    nextQuestion()
    uncheckAll()
    makeButtonClickable()
    displayQuestion()
  }  
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
  if (checkedAnswer) {
    document.getElementById("question-submitter").classList.add('clickable-button')
    document.getElementById("question-submitter").classList.remove('unclickable-button')    
  } else {
    document.getElementById("question-submitter").classList.add('unclickable-button')
    document.getElementById("question-submitter").classList.remove('clickable-button')    
  }
}


document.getElementById("start-game").addEventListener("click", startGame)
document.getElementById("question-submitter").addEventListener("click", submitAnswer)

document.getElementById("answer1").addEventListener("click", function () {
  uncheckOthers(1)
  makeButtonClickable()
  currentAnswer = 0
})
document.getElementById("answer2").addEventListener("click", function () {
  uncheckOthers(2)
  makeButtonClickable()
  currentAnswer = 1
})
document.getElementById("answer3").addEventListener("click", function () {
  uncheckOthers(3)
  makeButtonClickable()
  currentAnswer = 2
})
document.getElementById("answer4").addEventListener("click", function () {
  uncheckOthers(4)
  makeButtonClickable()
  currentAnswer = 3
})
