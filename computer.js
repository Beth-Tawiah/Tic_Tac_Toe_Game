function navigateToCPUPage(url) {
  // Handle navigation to CPU page (replace with your logic)
  window.location.href = url;
}
$("#Restart").click(function () {
  $("#popupMessage").show(); // Show the "Restart Game?" message
});

$("#cancel").click(function () {
  $("#popupMessage").hide(); // Hide the "Restart Game?" message
});

$("#confirmRestart").click(function () {
  $("#popupMessage").hide(); 
  restartGame();
  // Hide the "Restart Game?" message
});



// For computerMessage
$("#quitComputer").click(function () {
  // Redirect to the newGame page or perform other actions
  window.location.href = 'index.html';
});

$("#nextRoundComputer").click(function () {
    $("#computerMessage").hide(); // Hide the "Next Round" message
    // Hide the "Next Round" message
    restartGame();
  });
  
  // You may want to reset the game state or perform other actions

// For winMessage
$("#quitWin").click(function () {
  // Redirect to the newGame page or perform other actions
  window.location.href = 'index.html';
});

$("#nextRoundButton").click(function () {
  $("#winMessage").hide(); 
 
  restartGame();
  // Continue with the game logic for the next round
  // You may want to reset the game state or perform other actions
});


// For tieMessage
$("#quitTie").click(function () {
  // Redirect to the newGame page or perform other actions
  window.location.href = 'index.html';
});

$("#nextRoundTie").click(function () {
  $("#tieMessage").hide(); 
 
  restartGame();
  
});
var player="X";
var computer="O";

var playerScore = 0;
var cpuScore = 0;
var tiesScore = 0;
var scoresUpdated = false; 

// ... (Your existing code)




var board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]


if (Math.random() < 0.5) {
    var myMove = true;} else {
      var myMove = false;
    }




var winner;
if (myMove) {
  makeMove();
}

function restartGame() {
  board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
 
 if (Math.random() < 0.) {
    myMove = true;} else {
      myMove = false;
    }
 if (myMove) {
  makeMove();
}
 else {
 updateMove();}

}
function setMsg(msg, turnText) {
  var elem = document.getElementById("deMessage");
  elem.innerHTML = ''; // Clear existing content

  // Create an SVG element based on the message
  if (msg.includes("O TURN")) {
    // Computer is represented by "O"
    var computerIconSVG = document.createElement("div");
    computerIconSVG.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.7231 3.30608L16.6939 0.276913C16.3247 -0.0923043 15.7261 -0.0923043 15.3569 0.276913L10 5.63378L4.64314 0.276913C4.27392 -0.0923043 3.6753 -0.0923043 3.30608 0.276913L0.276913 3.30608C-0.0923043 3.6753 -0.0923043 4.27392 0.276913 4.64314L5.63378 10L0.276913 15.3569C-0.0923043 15.7261 -0.0923043 16.3247 0.276913 16.6939L3.30608 19.7231C3.6753 20.0923 4.27392 20.0923 4.64314 19.7231L10 14.3662L15.3569 19.7231C15.7261 20.0923 16.3247 20.0923 16.6939 19.7231L19.7231 16.6939C20.0923 16.3247 20.0923 15.7261 19.7231 15.3569L14.3662 10L19.7231 4.64314C20.0923 4.27392 20.0923 3.6753 19.7231 3.30608Z" fill="#A8BFC9"/></svg>';
    elem.appendChild(computerIconSVG);
  } else if (msg.includes("X TURN")) {
    // User is represented by "X"
    var userIconSVG = document.createElement("div");
    userIconSVG.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.7412 15.8706C31.7412 7.10551 24.6357 0 15.8706 0C7.10551 0 0 7.10551 0 15.8706C0 24.6357 7.10551 31.7412 15.8706 31.7412C24.6357 31.7412 31.7412 24.6357 31.7412 15.8706ZM9.4048 15.8706C9.4048 12.2996 12.2996 9.4048 15.8706 9.4048C19.4416 9.4048 22.3364 12.2996 22.3364 15.8706C22.3364 19.4416 19.4416 22.3364 15.8706 22.3364C12.2996 22.3364 9.4048 19.4416 9.4048 15.8706Z" fill="#A8BFC9"/></svg>';
    elem.appendChild(userIconSVG);
  }
  elem.innerHTML += turnText;


  // Append the message text
  elem.innerHTML += msg.replace("O TURN", "").replace("X TURN", "");

}





  function setAlr(msg) {
    var elem = document.getElementById("deMessage");
    elem.innerText = msg;
    elem.style.color = "blue";
  }


  function setWarn(msg) {
    var elem = document.getElementById("deMessage");
    elem.innerText = msg;
    elem.style.color = "red";
    $(elem).addClass("blinking");
  }
  
  function setCongs(msg) {
    var elem = document.getElementById("deMessage");
    elem.innerText = msg;
    elem.style.color = "green";
  }


$(document).ready(function() {
  $(".col-xs-4").click(function() {
   
    if (winner == 1) {setAlr("Game is over, the computer won.");
                    }
    else if (winner == -1) {setAlr("Game is over, it was a draw.");}
    else if (winner == 0) {setAlr("Game is over, you won!");}
    else if ($(this).html() === "") {{
  
    var cell = $(this).attr("id")
    var row = parseInt(cell[1])
    var col = parseInt(cell[2])
    if (!myMove) {
      board[row][col] = false;
      myMove = true;
      updateMove();
      makeMove();
    }}}
    else {
      setWarn("That square has already been used");
    }
  });
  
  

});

function updateMove() {
  updateSquares();
  winner = getWinner(board);

  if (winner == 1) {
    $("#computerMessage").show();
    $("#winMessage").hide();
    $("#tieMessage").hide();
  } else if (winner == 0) {
    $("#winMessage").show();
    $("#computerMessage").hide();
    $("#tieMessage").hide();
  } else if (winner == -1) {
    $("#tieMessage").show();
    $("#computerMessage").hide();
    $("#winMessage").hide();
  } else {
    $("#message").text(myMove ? setMsg("X TURN", "TURN") : setMsg("O TURN", "TURN"));
  }

  if (winner == 1 || winner == 0 || winner == -1) {
    // Increment scores based on the outcome
    if (!scoresUpdated) {
    if (winner == 1) {
      // Computer wins
      cpuScore ++;
    } else if (winner == 0) {
      // Player wins
      playerScore ++;
    } else if (winner == -1) {
      // It's a draw
      tiesScore ++;
    }

    // Update the scoreboard
    $("#playerScore .score").text(playerScore);
    $("#tiesScore .score").text(tiesScore);
    $("#cpuScore .score").text(cpuScore);

    scoresUpdated = true;
  }
} else {
  scoresUpdated = false;
}
}


function getWinner(board) {

  // Check if someone won
  vals = [true, false];
  var allNotNull = true;
  for (var k = 0; k < vals.length; k++) {
    var value = vals[k];

    // Check rows, columns, and diagonals
    var diagonalComplete1 = true;
    var diagonalComplete2 = true;
    for (var i = 0; i < 3; i++) {
      if (board[i][i] != value) {
        diagonalComplete1 = false;
      }
      if (board[2 - i][i] != value) {
        diagonalComplete2 = false;
      }
      var rowComplete = true;
      var colComplete = true;
      for (var j = 0; j < 3; j++) {
        if (board[i][j] != value) {
          rowComplete = false;
        }
        if (board[j][i] != value) {
          colComplete = false;
        }
        if (board[i][j] == null) {
          allNotNull = false;
        }
      }
      if (rowComplete || colComplete) {
        return value ? 1 : 0;
      }
    }
    if (diagonalComplete1 || diagonalComplete2) {
      return value ? 1 : 0;
    }
  }
  if (allNotNull) {
    return -1;
  }
  return null;
}

function updateSquares() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      $("#c" + i + "" + j).text(board[i][j] == false ? player : board[i][j] == true ? computer : "");
    }
  }
}

function makeMove() {
  setTimeout(function () {
    // Randomly decide whether to make an easy move or use minimax
    if (Math.random() < 0.5) {
      // Make a random move
      makeRandomMove();
    } else {
      // Use minimax algorithm
      board = minimaxMove(board);
    }
    myMove = false;
    updateMove();
  }, 1000); // Adjust the delay time (in milliseconds) as needed
}
function makeRandomMove() {
  // Find an empty cell and make a random move
  var emptyCells = [];
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[i][j] === null) {
        emptyCells.push({ row: i, col: j });
      }
    }
  }

  if (emptyCells.length > 0) {
    var randomIndex = Math.floor(Math.random() * emptyCells.length);
    var randomMove = emptyCells[randomIndex];
    board[randomMove.row][randomMove.col] = true; // Assuming true represents the computer's move
  }
}

function minimaxMove(board) {
  numNodes = 0;
  return recurseMinimax(board, true)[1];
}

var numNodes = 0;

function recurseMinimax(board, player) {
  numNodes++;
  var winner = getWinner(board);
  if (winner != null) {
    switch (winner) {
      case 1:
        // AI wins
        return [1, board]
      case 0:
        // opponent wins
        return [-1, board]
      case -1:
        // Tie
        return [0, board];
    }
  } else {
    // Next states
    var nextVal = null;
    var nextBoard = null;

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (board[i][j] == null) {
          board[i][j] = player;
          var value = recurseMinimax(board, !player)[0];
          if ((player && (nextVal == null || value > nextVal)) || (!player && (nextVal == null || value < nextVal))) {
            nextBoard = board.map(function(arr) {
              return arr.slice();
            });
            nextVal = value;
          }
          board[i][j] = null;
        }
      }
    }
    return [nextVal, nextBoard];
  }
}

updateMove();