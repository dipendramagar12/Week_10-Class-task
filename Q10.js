function calculateGrade(marks) {
  if (marks >= 90) {
    return "A+";
  } else if (marks >= 80) {
    return "A";
  } else if (marks >= 70) {
    return "B";
  } else if (marks >= 60) {
    return "C";
  } else if (marks >= 50) {
    return "D";
  } else {
    return "F";
  }
}

document.getElementById("calcBtn").addEventListener("click", function () {
  const input = document.getElementById("marks").value;
  const result = document.getElementById("result");

  if (input === "") {
    result.textContent = "Please enter marks";
    return;
  }

  const marks = Number(input);

  if (marks < 0 || marks > 100) {
    result.textContent = "Invalid Marks";
  } else {
    result.textContent = "Grade: " + calculateGrade(marks);
  }
});