

```javascript
// Load saved theme on page load
window.onload = function () {
  let savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    document.getElementById("themeBtn").textContent = "🌞";
  }
};

function toggleTheme() {
  document.body.classList.toggle("light-mode");

  let btn = document.getElementById("themeBtn");

  if (document.body.classList.contains("light-mode")) {
    btn.textContent = "🌞";
    localStorage.setItem("theme", "light");
  } else {
    btn.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
}
```
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}