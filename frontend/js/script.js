function askQuestion() {
    var wrongAnswer = true
    while (wrongAnswer) {
      var answer = prompt("which quiz game is the best?")
      if (answer == "bezzerquizzer") {
        alert("that is correct!")
        wrongAnswer = false
      } else {
        alert("that is wrong, try again!")
      }
    }
  }
