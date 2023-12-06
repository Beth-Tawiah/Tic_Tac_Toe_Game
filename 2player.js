function navigateToPlayerPage(url) {
  // Handle navigation to CPU page (replace with your logic)
  window.location.href = url;
}

var player2Score = 0;
var player1Score = 0;
var tiesScore = 0;
$(document).ready(function() {

  function startGame() {
    
     clearBox("one");
     clearBox("two");
     clearBox("three");
     clearBox("four");
     clearBox("five");
     clearBox("six");
     clearBox("seven");
     clearBox("eight");
     clearBox("nine");
  
   
    if (Math.random() < 0.5) {
    document.turn = "X";} else {
      document.turn="O";
    }
    document.winner = null;
  

   
  }
  

  
  $("#Restart").click(function () {
    $("#popupMessage").show(); // Show the "Restart Game?" message
  });
  
  $("#cancel").click(function () {
    $("#popupMessage").hide();

  });
  
  $("#confirmRestart").click(function () {
    $("#popupMessage").hide();
    startGame();// Hide the "Restart Game?" message
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
  function setMsg(msg) {
    var elem = document.getElementById("deMessage");
    elem.innerText = msg;
    elem.style.color = "black";
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
  

  
  function setAlr(msg) {
    var elem = document.getElementById("deMessage"); // Replace "alrMessage" with the actual ID of the element you want to modify
    elem.innerText = msg;
    elem.style.color = "blue";
    $(elem).removeClass("blinking");
  }
  
  function switchTurn() {
    if (checkForWinner(document.turn)) {
      document.winner = document.turn;
      if (document.turn === "X") {
        // player2Score += 1; // Player 2 (X) wins
        player2Message();
      } else {
        // player1Score += 1;
        player1Message();
      }
    } else if (checkForDraw()) {
      tiesScore += 1;
      tieMessage(); // It is a draw
      document.winner = "D";
    } else {
      if (document.turn == 'X') {
        document.turn = "O";
        setMsg(document.turn + "'s turn");
      } else {
        document.turn = "X";
        setMsg(document.turn + "'s turn");
      }
      $("#player1Score").text("Player 1: " + player1Score);
      $("#player2Score").text("Player 2: " + player2Score);
      $("#tiesScore").text("Ties: " + tiesScore);
  
     
    }
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


  $("#start").click(function() {
    
    startGame();
  })

  
  $(".col-xs-4").click(function() {
     

   if (document.winner == "D") {setAlr ("Game already over. It was a draw.")}
    
    else
    if (document.winner != null) {setAlr(document.turn + " already won the game");}
    else if ($(this).html() === "") {
      $(this).html(document.turn);
      switchTurn();
    } else {
      setWarn("That square has already been used");
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





  
  function clearBox(number) {
  document.getElementById(number).innerText=""; 
    
  }

});