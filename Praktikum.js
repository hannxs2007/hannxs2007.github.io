
document.getElementById("Button_Text").addEventListener("click", function () {
  document.getElementById("text_woche_1").style.display =
    document.getElementById("text_woche_1").style.display === "none"
      ? "block"
      : "none";
      // Text einschub
    });

document.documentElement.className =
  localStorage.getItem("theme") || "dark-mode";

function toggleTheme() {
  document.documentElement.classList.toggle("dark-mode");
  document.documentElement.classList.toggle("light-mode");
  localStorage.setItem("theme", document.documentElement.className);
  //Darkmode Theme
}

