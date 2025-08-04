let username = "nwataghana21"; // Hardcoded for now

Telegram.WebApp.MainButton.setText("🪙 Tap to Earn Coins");
Telegram.WebApp.MainButton.show();

Telegram.WebApp.MainButton.onClick(() => {
    fetch(`https://nwataghana.pythonanywhere.com/api/tap/${username}`, {
        method: "POST"
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("balance").innerText = data.balance;
    })
    .catch(err => {
        console.error("Error:", err);
    });
});
