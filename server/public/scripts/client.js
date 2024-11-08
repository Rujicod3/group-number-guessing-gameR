function onReady() {
  console.log("JavaScript is loaded!")
}

onReady()




// Variables

// winnerName (accessed from html doc)
let winnerName = document.getElementById("winner");
// numberOfGuesses (start at 0) // # of guesses counter
// gonna call roundNumber instead
let roundNumber = 0;


// Functions

  //function to access guesses

// playRound(event) //Get guesses from form input

function playRound(event) {
  event.preventDefault();
  let playerOneGuess = document.getElementById('playerOne').value
  let playerTwoGuess = document.getElementById('playerTwo').value
  let playerThreeGuess = document.getElementById('playerThree').value

  let newRound = {
    playerOnesGuess: playerOnesGuess,
    playerOnesResult: 'guess',

    playerTwosGuess: playerTwosGuess,
    playerTwosResult: 'guess',

    playerThreeGuess: playerThreeGuess,
    playerThreeResult: 'guess'
    }

    axios({
      method: 'POST',
      url: '/pastGuesses',
      data: newRound
    })
    .then ((response) => {
    console.log('past guess is:', req.body);
      fetchRound();
    })
    }

  
//   prevent default
//   let playerOneGuess(get by element id in html)
//   let playerTwoGuess(get by element id in html)
//   let playerThreeGuess(get by element id in html)

// newRound - object 


// accessing playerOneGuess and value
// and PlayerTwoGuess and value

  // function to access number of guesses


// POSTING TO SERVER
// axios stuff

// function that populates a table with
// all prebvious player guesses and also if guess
// was too high or too low (loop through player guesses)

// access table we create in html

// if if else