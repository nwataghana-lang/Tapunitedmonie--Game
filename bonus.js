
window.onload = function () {
  let lastLogin = localStorage.getItem('lastLogin');
  let today = new Date().toLocaleDateString();
  if (lastLogin !== today) {
    let coins = parseInt(localStorage.getItem('coins') || 0);
    coins += 10;
    localStorage.setItem('coins', coins);
    localStorage.setItem('lastLogin', today);
    alert('You earned 10 coins for logging in today!');
  }
}
