
var score = 0


function askQuestion() {
  var answer = prompt("Which quiz game is the best?")
  if (answer == "Bezzerquizzer") {
    alert("That is correct!")
    score += 1
    document.getElementById('box-' + score).style.backgroundColor = "red"
  } else {
    alert("That is wrong, try again!")
  }
  console.log(score)
}
