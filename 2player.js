function navigateToPlayerPage(url) {
  // Handle navigation to CPU page (replace with your logic)
  window.location.href = url;
}
document.addEventListener("DOMContentLoaded", function() {

  const playerChoice = localStorage.getItem("playerChoice");

  // Update the scoreboard based on the player choice
  updateScoreboard(playerChoice);
  // var xIcon = '<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD" fill-rule="evenodd"/></svg>';

  // var oIcon = '<svg width="66" height="66" xmlns="http://www.w3.org/2000/svg"><path d="M33 1c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C15.327 65 1 50.673 1 33 1 15.327 15.327 1 33 1Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" stroke="#F2B137" stroke-width="2" fill="none"/></svg>';



  function updateSquares() {
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        var cellContent = "";
        if (board[i][j] === false) {
          // Player's move (X)
          cellContent = '<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD" fill-rule="evenodd"/></svg>';
        } else if (board[i][j] === true) {
          // Computer's move (O)
          cellContent = '<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#F2B137"/></svg>';
        }
  
        // Set the content of the cell
        $("#c" + i + "" + j).html(cellContent);
      }
    }
  
    // var winningCombination = getWinningCombination(board);
    // if (winningCombination) {
    //   var winner = board[winningCombination[0][0]][winningCombination[0][1]] ? 'C' : 'X';
    //   for (var i = 0; i < winningCombination.length; i++) {
    //     var row = winningCombination[i][0];
    //     var col = winningCombination[i][1];
    //     var cellId = "#c" + row + "" + col;
    //     if (winner === 'X') {
    //       $(cellId).addClass("winning-cell-x");
    //     } else if (winner === 'O') {
    //       $(cellId).addClass("winning-cell-o");
    //     }
    //   }
    // }
  }
  

function getWinningCombination(board) {
  // Check if someone won
  var vals = [true, false];
  for (var k = 0; k < vals.length; k++) {
    var value = vals[k];

    // Check rows, columns, and diagonals
    for (var i = 0; i < 3; i++) {
      // Check rows
      if (board[i][0] === value && board[i][1] === value && board[i][2] === value) {
        return [[i, 0], [i, 1], [i, 2]]; // Winning combination
      }
      // Check columns
      if (board[0][i] === value && board[1][i] === value && board[2][i] === value) {
        return [[0, i], [1, i], [2, i]]; // Winning combination
      }
    }
    // Check diagonals
    if (board[0][0] === value && board[1][1] === value && board[2][2] === value) {
      return [[0, 0], [1, 1], [2, 2]]; // Winning combination
    }
    if (board[0][2] === value && board[1][1] === value && board[2][0] === value) {
      return [[0, 2], [1, 1], [2, 0]]; // Winning combination
    }
  }
  return null; // No winning combination
}



function updateScoreboard(playerChoice) {
  const selectedMarkElement = document.getElementById("selectedMark");
  const XScoreElement = document.getElementById("X");
  const OScoreElement = document.getElementById("O");

  selectedMarkElement.textContent = "";

  if (playerChoice === "X") {
      XScoreElement.innerHTML = `X (P1) <br><span class="score">0</span>`;
      OScoreElement.innerHTML = `O (P2) <br><span class="score">0</span>`;
  } else if (playerChoice === "O") {
      XScoreElement.innerHTML = `X (P2) <br><span class="score">0</span>`;
      OScoreElement.innerHTML = `O (P1) <br><span class="score">0</span>`;
  } else {
      // Handle other cases or default behavior
  }
var player2Score = 0;
var player1Score = 0;
var tiesScore = 0;

function startGame() {
  clearAllBoxes();
  document.turn = "X"; // Set the initial turn to "X"
  document.winner = null;
}





function setMsg(msg, turnText) {
  const elem = document.getElementById("deMessage");
  elem.innerHTML = `<div>${msg.includes("O TURN") ? getOSVG() : getXSVG()}</div>${turnText}${msg.replace("O TURN", "").replace("X TURN", "")}`;
}


  
  $("#Restart").click(function () {
    $("#popupMessage").show(); // Show the "Restart Game?" message
  });
  
  $("#cancel").click(function () {
    $("#popupMessage").hide();

  });
  
  $("#confirmRestart").click(function () {
    $("#popupMessage").hide();
    window.location.href = 'index.html';


  });
  
  
  $("#quitComputer").click(function () {
    window.location.href = 'index.html';
  });
  
  $("#nextRoundComputer").click(function () {
      $("#player1Message").hide(); 
      startGame();
    });
    
  
  $("#quitWin").click(function () {
    // Redirect to the newGame page or perform other actions
    window.location.href = 'index.html';
  });
  
  $("#nextRoundButton").click(function () {
    $("#player2Message").hide(); 
    startGame();
    
  });
  
  
  // For tieMessage
  $("#quitTie").click(function () {
    // Redirect to the newGame page or perform other actions
    window.location.href = 'index.html';
  });
  
  $("#nextRoundTie").click(function () {
    $("#tieMessage").hide();
    startGame();
    
   
  });
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
  
  function switchTurn() {
    if (checkForWinner(document.turn)) {
        document.winner = document.turn;
        if (document.turn === "X") {
            player2Message();
        } else {
            player1Message();
        }
    } else if (checkForDraw()) {
        tieMessage();
        document.winner = "D";
        tiesScore += 1; 

    } else {
        if (document.turn == 'X') {
            document.turn = "O";
            setMsg("X TURN", "TURN"); // Provide the second argument "TURN"
        } else {
            document.turn = "X";
            setMsg("O TURN", "TURN"); // Provide the second argument "TURN"
        }
       
    }
    $("#X .score").text(player1Score);
    $("#O .score").text(player2Score);
    $("#tiesScore .score").text(tiesScore);

    // scoresUpdated = true;

    // scoresUpdated = false;
}

  
  
function player1Message() {
  player1Score += 1;
  $("#player1Message").show();
  $("#player1Message svg path").attr("fill", "#F2B137");
}

function player2Message() {
  player2Score += 1;
  $("#player2Message").show();
  $("#player2Message svg path").attr("fill", "#31C3BD");
}

function tieMessage() {
  $("#tieMessage").show();
  $("#tieMessage p").text("ROUND TIED");
}
  startGame();

function clearAllBoxes() {
  $(".col-xs-4").html("");
}
  $(".col-xs-4").click(function() {
    var cellContent = $(this).html();
    if (cellContent === "") {
      $(this).html(document.turn);
      switchTurn();
    }
  });


  $(".col-xs-4").click(function () {
      var cellContent = $(this).html(); // Uncomment this line
      if (cellContent === "") {
        if (document.turn === "X") {
          // $(this).html('<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD" fill-rule="evenodd"/></svg>');
        } else if (document.turn === "O") {
          // $(this).html('<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#F2B137"/></svg>');
        }

          $(this).html( document.turn);


        switchTurn();
      } else {
        // Cell is not empty, replace content with appropriate SVG
        if (cellContent === "X") {
          $(this).html('<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD" fill-rule="evenodd"/></svg>');
        } else if (cellContent === "O") {
          $(this).html('<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#F2B137"/></svg>');
        }
        // Revert to original content after a delay (adjust the timeout as needed)
        setTimeout(function () {
          $(this).html(cellContent);
        }.bind(this), 2000);
  
      }

  });
  function getBox(number) {
    return document.getElementById(number).innerText;
  }

  function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
      result = true;
    }
    return result;
  }

  function checkForDraw() {
  var result = false;
   if ((getBox("one") !=="") && (getBox("two") !=="") && (getBox("three") !=="")  && (getBox("four") !=="") && (getBox("five") !=="") && (getBox("six") !=="")
  && (getBox("seven") !=="") && (getBox("eight") !=="") && (getBox("nine") !=="")    
      
      ) {
     //console.log(getBox("one"));
     //console.log(getBox("two"));
     //conosole.log(getBox("three"));
     
     
     result = true;
   }
    return result;
  }
  
    
    
    
  function checkForWinner(move) {
    var result = false;
    if (checkRow("one", "two", "three", move) ||
      checkRow("four", "five", "six",move) ||
      checkRow("seven", "eight", "nine", move) ||
      checkRow("one", "four", "seven", move) ||
      checkRow("two", "five", "eight", move) ||
      checkRow("three", "six", "nine", move) ||
      checkRow("one", "five", "nine", move) ||
      checkRow("three", "five", "seven", move))

    {
      result = true;
    }

    return result;

    
  }

  
  startGame();

  $("#start").click(function() {
    startGame();
  });
}});