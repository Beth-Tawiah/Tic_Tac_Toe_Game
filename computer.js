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
  // Continue with the game logic for the next round
  // You may want to reset the game state or perform other actions
});
var player="X";
var computer="O";
// ... (Your existing code)

var playerScore = 0;
var cpuScore = 0;
var tiesScore = 0;


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

function setMsg(msg) {
    var elem = document.getElementById("deMessage");
    elem.innerText = msg;
    elem.style.color = "black";
    $(elem).removeClass("blinking");
  }

  function setAlr(msg) {
    var elem = document.getElementById("deMessage");
    elem.innerText = msg;
    elem.style.color = "blue";
    $(elem).removeClass("blinking");
  }
  function blinker() {
    $('.blinking').fadeOut(500);
    $('.blinking').fadeIn(500);
  }
  setInterval(blinker, 1000);

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
  
  
 $("#X").click(function() {
    
     player = "X";
     computer = "O";
     restartGame();
     $("h2").html("Playing as X");
      $('h2').css({'color':'black'}); 
   });
  $("#O").click(function() {
    
     player = "O";
     computer="X";
     restartGame();
     $("h2").html("Playing as O");
     $('h2').css({'color':'black'});  
   });
  
  $("#start").click(restartGame);
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
    $("#message").text(myMove ? setMsg("O TURN") : setMsg("X TURN"));
  }

  if (winner == 1 || winner == 0 || winner == -1) {
    // Increment scores based on the outcome
    if (winner == 1) {
      // Computer wins
      cpuScore += 1;
    } else if (winner == 0) {
      // Player wins
      playerScore += 1;
    } else if (winner == -1) {
      // It's a draw
      tiesScore += 1;
    }

    // Update the scoreboard
    $("#playerScore").text("X (You) \n" + playerScore);
    $("#tiesScore").text("Ties \n" + tiesScore);
    $("#cpuScore").text("X (CPU) \n" + cpuScore);
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