let username = Telegram.WebApp.initDataUnsafe.user?.username || "guest";
let username = "nwataghana21"; // 🔒 Hardcoded


window.Telegram.WebApp.ready();

Telegram.WebApp.MainButton.setText("Tap to Earn 🖱️");
Telegram.WebApp.MainButton.show();

Telegram.WebApp.MainButton.onClick(() => {
    fetch(`${backend}/api/tap/${username}`, {
        method: "POST"
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("balance").innerText = data.balance;
    });
});

window.onload = () => {
    username = Telegram.WebApp.initDataUnsafe.user?.username || "guest";

    fetch(`${backend}/api/user/${username}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("balance").innerText = data.balance;
        });
};
