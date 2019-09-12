let wins = 0
let losses = 0
let userScore = 0
let goalScore = 0
// random gem Values
let greenValue = Math.floor(Math.random() * 12) + 1
let blueValue = Math.floor(Math.random() * 12) + 1
let redValue = Math.floor(Math.random() * 12) + 1
let yellowValue = Math.floor(Math.random() * 12) + 1

let currentGoal = Math.floor(Math.random() * 100) + 40
// random number to start

// reset the game
let reset = function() {
    currentGoal = Math.floor(Math.random() * 100) + 40
    let greenValue = Math.floor(Math.random() * 12) + 1
    let blueValue = Math.floor(Math.random() * 12) + 1
    let redValue = Math.floor(Math.random() * 12) + 1
    let yellowValue = Math.floor(Math.random() * 12) + 1
  document.getElementById('totalScore').innerHTML = 'total score: ' + userScore
}
let randomNumber = function () {
  document.getElementById('goal').innerHTML = 'current goal: ' + currentGoal
}
randomNumber()

// winner function
let winner = function () {
 alert('You Win!')
    wins++
    document.getElementById('wins').innerHTML = 'Wins: ' + wins
    reset()

}

// loser function
let loser = function() {
  alert('You Lose!')
    losses++
    document.getElementById('losses').innerHTML = 'Losses: ' + losses
    reset()
  
}




// green crystal
document.getElementById('green').addEventListener('click', function() {
userScore = userScore + greenValue
document.getElementById('totalScore').innerHTML = 'total score: ' + userScore
if (userScore === currentGoal) {
  winner()
} else if (userScore > currentGoal) {
  loser()
} 
 
})

// for blue crystal
document.getElementById('blue').addEventListener('click', function() {
  userScore = userScore + blueValue
  document.getElementById('totalScore').innerHTML = 'total score: ' + userScore
  if (userScore === currentGoal) {
    winner()
  } else if (userScore > currentGoal) {
    loser()
  } 
   
})

//  for red crystal
document.getElementById('red').addEventListener('click', function() {
  userScore = userScore + greenValue
  document.getElementById('totalScore').innerHTML = 'total score: ' + userScore
  if (userScore === currentGoal) {
    winner()
  } else if (userScore > currentGoal) {
    loser()
  } 
})

// for yellow crystal
document.getElementById('yellow').addEventListener('click', function () {
  userScore = userScore + greenValue
  document.getElementById('totalScore').innerHTML = 'total score: ' + userScore
  if (userScore === currentGoal) {
    winner()
  } else if (userScore > currentGoal) {
    loser()
  }
})




