function navigateToCPUPage(url) {
  // Handle navigation to CPU page
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
  // Redirect to the newGame page 
  window.location.href = 'index.html';
});

$("#nextRoundComputer").click(function () {
    $("#computerMessage").hide(); // Hide the "Next Round" message
    // Hide the "Next Round" message
    restartGame();
  });
  

// For winMessage
$("#quitWin").click(function () {
  // Redirect to the newGame page
  window.location.href = 'index.html';
});

$("#nextRoundButton").click(function () {
  $("#winMessage").hide(); 
 
  restartGame();
  // Continue with the game  for the next round
});


// For tieMessage
$("#quitTie").click(function () {
  window.location.href = 'index.html';
});

$("#nextRoundTie").click(function () {
  $("#tieMessage").hide(); 
 
  restartGame();
  
});

//x and o icons 
var player="X";
var computer="0";

var playerScore = 0;
var cpuScore = 0;
var tiesScore = 0;
var scoresUpdated = false; 





var board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]


if (Math.random() < 0.9) {
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
 
 if (Math.random() < 0.9) {
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
  elem.innerHTML = ''; 
// svg for the message
  if (msg.includes("O TURN")) {
    var computerIconSVG = document.createElement("div");
    computerIconSVG.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.7231 3.30608L16.6939 0.276913C16.3247 -0.0923043 15.7261 -0.0923043 15.3569 0.276913L10 5.63378L4.64314 0.276913C4.27392 -0.0923043 3.6753 -0.0923043 3.30608 0.276913L0.276913 3.30608C-0.0923043 3.6753 -0.0923043 4.27392 0.276913 4.64314L5.63378 10L0.276913 15.3569C-0.0923043 15.7261 -0.0923043 16.3247 0.276913 16.6939L3.30608 19.7231C3.6753 20.0923 4.27392 20.0923 4.64314 19.7231L10 14.3662L15.3569 19.7231C15.7261 20.0923 16.3247 20.0923 16.6939 19.7231L19.7231 16.6939C20.0923 16.3247 20.0923 15.7261 19.7231 15.3569L14.3662 10L19.7231 4.64314C20.0923 4.27392 20.0923 3.6753 19.7231 3.30608Z" fill="#A8BFC9"/></svg>';
    elem.appendChild(computerIconSVG);
  } else if (msg.includes("X TURN")) {
    var userIconSVG = document.createElement("div");
    userIconSVG.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10ZM5.92593 10C5.92593 7.74995 7.74995 5.92593 10 5.92593C12.25 5.92593 14.0741 7.74995 14.0741 10C14.0741 12.25 12.25 14.0741 10 14.0741C7.74995 14.0741 5.92593 12.25 5.92593 10Z" fill="#A8BFC9"/></svg>';
    elem.appendChild(userIconSVG);
  }
  elem.innerHTML += turnText;
  // Append the message text
  elem.innerHTML += msg.replace("O TURN", "").replace("X TURN", "");

  }


  function setAlr(msg) {
    var elem = document.getElementById("deMessage");
    elem.innerText = msg;
    elem.style.color = "#A8BFC9";
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
  $(".col-xs-4").click(function () {
    var cell = $(this).attr("id");
    var row = parseInt(cell[1]);
    var col = parseInt(cell[2]);
  
    if (winner == 1) {
      setAlr("Game is over, the computer won.");
    } else if (winner == -1) {
      setAlr("Game is over, it was a draw.");
    } else if (winner == 0) {
      setAlr("Game is over, you won!");
    } else if (board[row][col] === null) {
      if (!myMove) {
        board[row][col] = false;
        myMove = true;
        updateMove();
        makeMove();
      } else {
        // Replace the content of the clicked cell with the SVG for O
        board[row][col] = true;
        updateSquares();
      }} else if ($(this).html() === "") {
        // Dynamically insert the player's icon into the clicked cell
        var playerIcon = document.turn === "X"
            ? '<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD" fill-rule="evenodd"/></svg>'
            : '<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#F2B137"/></svg>';

        $(this).html(playerIcon);
        switchTurn();
    } else {
        // Set the warning message to the appropriate SVG
        var warnIcon = document.turn === "X"
            ? '<svg width="66" height="66" xmlns="http://www.w3.org/2000/svg"><path d="M33 1c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C15.327 65 1 50.673 1 33 1 15.327 15.327 1 33 1Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" stroke="#F2B137" stroke-width="2" fill="none"/></svg>'
            : '<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M51.12 1.269c.511 0 1.023.195 1.414.586l9.611 9.611c.391.391.586.903.586 1.415s-.195 1.023-.586 1.414L44.441 32l17.704 17.705c.391.39.586.902.586 1.414 0 .512-.195 1.024-.586 1.415l-9.611 9.611c-.391.391-.903.586-1.415.586a1.994 1.994 0 0 1-1.414-.586L32 44.441 14.295 62.145c-.39.391-.902.586-1.414.586a1.994 1.994 0 0 1-1.415-.586l-9.611-9.611a1.994 1.994 0 0 1-.586-1.415c0-.512.195-1.023.586-1.414L19.559 32 1.855 14.295a1.994 1.994 0 0 1-.586-1.414c0-.512.195-1.024.586-1.415l9.611-9.611c.391-.391.903-.586 1.415-.586s1.023.195 1.414.586L32 19.559 49.705 1.855a1.994 1.994 0 0 1 .586-1.415c0-.512.195-1.024.586-1.414Z" stroke="#31C3BD" stroke-width="2" fill="none"/></svg>';

        $(this).html(warnIcon);
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
      var cellContent = "";
      if (board[i][j] === false) {
        // Player's move (X)
        cellContent ='<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD" fill-rule="evenodd"/></svg>'

      } else if (board[i][j] === true) {
        // Computer's move (O)
        cellContent ='<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#F2B137"/></svg>'

      }

      // Set the content of the cell
      $("#c" + i + "" + j).html(cellContent);
    }
  }
}


function makeMove() {
  setTimeout(function () {
    // Always use the minimax algorithm
    board = minimaxMove(board);
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