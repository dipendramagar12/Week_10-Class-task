const numbersDiv = document.getElementById("numbers");

function generateNumbers() {
  let html = "";

  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      html += '<span class="even">' + i + "</span> ";
    } else {
      html += '<span class="odd">' + i + "</span> ";
    }
  }

  numbersDiv.innerHTML = html;
}

document.getElementById("generateBtn").addEventListener("click", generateNumbers);