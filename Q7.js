function changeColor(color) {
  document.body.style.backgroundColor = color;
}

document.getElementById("redBtn").addEventListener("click", function () {
  changeColor("red");
});

document.getElementById("greenBtn").addEventListener("click", function () {
  changeColor("green");
});

document.getElementById("blueBtn").addEventListener("click", function () {
  changeColor("blue");
});