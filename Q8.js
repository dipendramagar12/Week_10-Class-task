let count = 0;

const heading = document.getElementById("heading");
const message = document.getElementById("message");

document.getElementById("clickBtn").addEventListener("click", function () {
  count++;
  heading.textContent = "Button Clicked: " + count;

  if (count === 10) {
    message.textContent = "You have clicked 10 times!";
  } else {
    message.textContent = "";
  }
});