const output = document.getElementById("output");

function show(text) {
  console.log(text);
  output.textContent = text;
}

// Q1: Even or Odd
document.getElementById("q1").addEventListener("click", function () {
  const n = Number(prompt("Enter a number:"));
  if (n % 2 === 0) {
    show("The number is Even");
  } else {
    show("The number is Odd");
  }
});

// Q2: Print 1 to 50, then only numbers divisible by 5
document.getElementById("q2").addEventListener("click", function () {
  let all = "";
  let by5 = "";
  for (let i = 1; i <= 50; i++) {
    all += i + " ";
    if (i % 5 === 0) {
      by5 += i + " ";
    }
  }
  console.log("1 to 50: " + all);
  console.log("Divisible by 5: " + by5);
  output.textContent = "1 to 50:\n" + all + "\n\nDivisible by 5:\n" + by5;
});

// Q3: Largest of three numbers
document.getElementById("q3").addEventListener("click", function () {
  const a = Number(prompt("Enter first number:"));
  const b = Number(prompt("Enter second number:"));
  const c = Number(prompt("Enter third number:"));
  let largest;

  if (a >= b && a >= c) {
    largest = a;
  } else if (b >= a && b >= c) {
    largest = b;
  } else {
    largest = c;
  }
  show("The largest number is " + largest);
});

// Q4: Multiplication table
document.getElementById("q4").addEventListener("click", function () {
  const n = Number(prompt("Enter a number:"));
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += n + " x " + i + " = " + n * i + "\n";
  }
  show(result);
});

// Q5: Sum of 1 to 100 using while loop
document.getElementById("q5").addEventListener("click", function () {
  let i = 1;
  let sum = 0;
  while (i <= 100) {
    sum += i;
    i++;
  }
  show("Sum of numbers from 1 to 100 = " + sum);
});

// Q6: Simple login
document.getElementById("q6").addEventListener("click", function () {
  const username = prompt("Enter username:");
  const password = prompt("Enter password:");
  if (username === "admin" && password === "12345") {
    show("Login Successful");
  } else {
    show("Invalid Username or Password");
  }
});