// Array that stores all student records
const students = [];

const messageEl = document.getElementById("message");
const resultContent = document.getElementById("resultContent");

function showMessage(text, type) {
  messageEl.textContent = text;
  messageEl.className = type;
}

function calculateGrade(percentage) {
  if (percentage >= 90) {
    return "A+";
  } else if (percentage >= 80) {
    return "A";
  } else if (percentage >= 70) {
    return "B";
  } else if (percentage >= 60) {
    return "C";
  } else if (percentage >= 50) {
    return "D";
  } else {
    return "F";
  }
}

function addStudent() {
  const name = document.getElementById("name").value.trim();
  const mathValue = document.getElementById("math").value;
  const scienceValue = document.getElementById("science").value;
  const computerValue = document.getElementById("computer").value;

  if (name === "") {
    showMessage("Please enter student name", "error");
    return;
  }

  if (mathValue === "" || scienceValue === "" || computerValue === "") {
    showMessage("Please enter all subject marks", "error");
    return;
  }

  const math = Number(mathValue);
  const science = Number(scienceValue);
  const computer = Number(computerValue);
  const marksList = [math, science, computer];

  for (let i = 0; i < marksList.length; i++) {
    if (marksList[i] < 0 || marksList[i] > 100) {
      showMessage("Error: marks must be between 0 and 100", "error");
      return;
    }
  }

  const total = math + science + computer;
  const percentage = (total / 300) * 100;
  const grade = calculateGrade(percentage);

  const student = {
    name: name,
    math: math,
    science: science,
    computer: computer,
    total: total,
    percentage: percentage,
    grade: grade
  };
  students.push(student);

  resultContent.innerHTML =
    '<div class="result-box">' +
    "<p><strong>Student Name:</strong> " + name + "</p>" +
    "<p><strong>Total Marks:</strong> " + total + "</p>" +
    "<p><strong>Percentage:</strong> " + percentage.toFixed(2) + "%</p>" +
    "<p><strong>Grade:</strong> " + grade + "</p>" +
    "</div>";

  showMessage("Result calculated successfully", "success");

  document.getElementById("name").value = "";
  document.getElementById("math").value = "";
  document.getElementById("science").value = "";
  document.getElementById("computer").value = "";
}

function generateStudentList() {
  if (students.length === 0) {
    showMessage("No students added yet", "error");
    return;
  }

  let table =
    "<table><tr><th>No.</th><th>Name</th><th>Total Marks</th><th>Percentage</th><th>Grade</th></tr>";

  for (let i = 0; i < students.length; i++) {
    const s = students[i];
    table +=
      "<tr>" +
      "<td>" + (i + 1) + "</td>" +
      "<td>" + s.name + "</td>" +
      "<td>" + s.total + "</td>" +
      "<td>" + s.percentage.toFixed(2) + "%</td>" +
      "<td>" + s.grade + "</td>" +
      "</tr>";
  }

  table += "</table>";
  resultContent.innerHTML = table;
  showMessage("", "");
}

document.getElementById("addBtn").addEventListener("click", addStudent);
document.getElementById("listBtn").addEventListener("click", generateStudentList);