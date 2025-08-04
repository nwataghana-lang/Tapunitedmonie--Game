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
if (balance % 10 === 0) {
  balance += 5; // Bonus 5 coins
  alert("🎁 Bonus! +5 coins");
}
const ref = new URLSearchParams(window.location.search).get("ref");
fetch(`https://nwataghana.pythonanywhere.com/api/tap/${username}` + (ref ? `?ref=${ref}` : ""), {
  method: "POST",
})
.then(res => res.json())
.then(data => {
  document.getElementById("balance").innerText = data.balance;
});
