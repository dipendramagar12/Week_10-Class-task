
const students = [];

// Function to calculate grade
function getGrade(percentage) {

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

// Function to add student
function addStudent() {

    let name = document.getElementById("name").value;

    let mathValue = document.getElementById("math").value;
    let scienceValue = document.getElementById("science").value;
    let computerValue = document.getElementById("computer").value;

    let result = document.getElementById("result");

    // Check student name
    if (name.trim() === "") {

        result.textContent = "Please enter student name";
        return;

    }

    // Check empty marks
    if (mathValue === "" || scienceValue === "" || computerValue === "") {

        result.textContent = "Please enter all subject marks";
        return;

    }

    let math = Number(mathValue);
    let science = Number(scienceValue);
    let computer = Number(computerValue);

    // Validate marks
    if (
        math < 0 || math > 100 ||
        science < 0 || science > 100 ||
        computer < 0 || computer > 100
    ) {

        result.textContent = "Invalid Marks";
        return;

    }

    // Calculate total marks
    let total = math + science + computer;

    // Calculate percentage
    let percentage = (total / 300) * 100;

    // Calculate grade
    let grade = getGrade(percentage);

    // Create student object
    let student = {
        name: name,
        total: total,
        percentage: percentage.toFixed(2),
        grade: grade
    };

    // Add student to array
    students.push(student);

    // Display result
    result.textContent =
        "Result calculated successfully! Total: " +
        total + ", Percentage: " +
        percentage.toFixed(2) + "%, Grade: " + grade;

}

// Function to generate student list
function generateStudentList() {

    let table = document.getElementById("studentTable");

    let studentList = document.getElementById("studentList");

    studentList.innerHTML = "";

    if (students.length === 0) {

        document.getElementById("result").textContent =
            "No student records available.";

        table.style.display = "none";
        return;

    }

    // Loop through student records
    for (let i = 0; i < students.length; i++) {

        let student = students[i];

        let row = document.createElement("tr");

        let nameCell = document.createElement("td");
        let totalCell = document.createElement("td");
        let percentageCell = document.createElement("td");
        let gradeCell = document.createElement("td");

        nameCell.textContent = student.name;
        totalCell.textContent = student.total;
        percentageCell.textContent = student.percentage + "%";
        gradeCell.textContent = student.grade;

        row.appendChild(nameCell);
        row.appendChild(totalCell);
        row.appendChild(percentageCell);
        row.appendChild(gradeCell);

        studentList.appendChild(row);

    }

    table.style.display = "table";

}

// Event handling
document.getElementById("addBtn").addEventListener("click", addStudent);

document.getElementById("generateBtn").addEventListener("click", generateStudentList);
