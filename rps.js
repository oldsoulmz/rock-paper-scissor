document.addEventListener("DOMContentLoaded", () => {
    const playerCell = document.getElementById("playerCell");
    const computerCell = document.getElementById("computerCell");
    const choicesBtns = document.querySelectorAll(".choice");
    const restartButton = document.getElementById("restartButton");
    const winningMessage = document.getElementById("winningMessage");

    const choices = ["✊", "✋", "✌️"]; 

  
    choicesBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const playerChoice = btn.dataset.choice;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];

            // Display choices
            playerCell.textContent = playerChoice;
            computerCell.textContent = computerChoice;

            // Decide winner
            checkWinner(playerChoice, computerChoice);
        });
    });

    function checkWinner(player, computer) {
        if (player === computer) {
            winningMessage.textContent = "🤝 It's a Draw!";
        } else if (
            (player === "✊" && computer === "✌️") ||
            (player === "✋" && computer === "✊") ||
            (player === "✌️" && computer === "✋")
        ) {
            winningMessage.textContent = "🎉 You Win!";
        } else {
            winningMessage.textContent = "💻 Computer Wins!";
        }
    }

    // Reset game
    restartButton.addEventListener("click", () => {
        playerCell.textContent = "";
        computerCell.textContent = "";
        winningMessage.textContent = "";
    });
});
