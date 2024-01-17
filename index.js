// index.js

// Function to store player choice in localStorage
function storePlayerChoice(choice) {
    localStorage.setItem("playerChoice", choice);
}

document.getElementById("x").addEventListener("click", function() {
    storePlayerChoice("X");
});

document.getElementById("o").addEventListener("click", function() {
    storePlayerChoice("O");
});

document.getElementById("cpuGameBtn").addEventListener("click", function() {
    redirectToComputerPage('computer.html');
});

document.getElementById("playerGameBtn").addEventListener("click", function() {
    redirectToPlayerPage('2player.html');
});

function redirectToComputerPage(page) {
    window.location.href = page;
}

function redirectToPlayerPage(page) {
    window.location.href = page;

}

