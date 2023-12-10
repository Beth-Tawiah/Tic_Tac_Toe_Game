function navigateToPlayerPage(url) {
  // Handle navigation to CPU page (replace with your logic)
  window.location.href = url;
}

var player2Score = 0;
var player1Score = 0;
var tiesScore = 0;
var scoresUpdated = false; 

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
    elem.innerHTML = ''; // Clear existing content

    // Create an SVG element based on the message
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

  
  

  function setWarn(msg) {
    var elem = document.getElementById("deMessage");
    elem.innerText = msg;
    elem.style.color = "#A8BFC9";
  }
  

  
  function setAlr(msg) {
    var elem = document.getElementById("deMessage"); // Replace "alrMessage" with the actual ID of the element you want to modify
    elem.innerText = msg;
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
        tiesScore += 1;
        tieMessage();
        document.winner = "D";
    } else {
        if (document.turn == 'X') {
            document.turn = "O";
            setMsg("X TURN", "TURN"); // Provide the second argument "TURN"
        } else {
            document.turn = "X";
            setMsg("O TURN", "TURN"); // Provide the second argument "TURN"
        }
        $("#player1Score .score").text(player1Score);
        $("#player2Score .score").text(player2Score);
        $("#tiesScore .score").text(tiesScore);

        scoresUpdated = true;
    }

    scoresUpdated = false;
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