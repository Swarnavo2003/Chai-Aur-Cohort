function changeBackground(bgColor, color) {
  document.body.style.backgroundColor = bgColor;
  document.body.style.color = color;
}

/* 
const darkButton = document.getElementById("dark-mode-button");
darkButton.innerText = "Black Kardo Yaar";
darkButton.addEventListener("click", function () {
  changeBackground("black", "white");
});

const whiteButton = document.getElementById("white-mode-button");
whiteButton.addEventListener("click", function () {
  changeBackground("white", "black");
});
*/

const themeButton = document.getElementById("theme-button");
themeButton.addEventListener("click", () => {
  const currColor = document.body.style.backgroundColor;
  if (!currColor || currColor == "white") {
    changeBackground("black", "white");
  } else {
    changeBackground("white", "black");
  }
});
