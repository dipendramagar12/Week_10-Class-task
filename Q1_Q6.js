const output = document.getElementById("output");

function show(text) {
  output.textContent = text;
}

// Q1. Even or Odd
function q1() {
  const num = Number(prompt("Enter a number:"));
  if (num % 2 === 0) {
    show("The number is Even");
  } else {
    show("The number is Odd");
  }
}

// Q2. Print numbers 1 to 50, then only those divisible by 5
function q2() {
  let all = [];
  let divisibleBy5 = [];

  for (let i = 1; i <= 50; i++) {
    console.log(i);
    all.push(i);
    if (i % 5 === 0) {
      divisibleBy5.push(i);
    }
  }

  console.log("Numbers divisible by 5:");
  for (let i = 0; i < divisibleBy5.length; i++) {
    console.log(divisibleBy5[i]);
  }

  show("Numbers 1 to 50 printed in the console.\nDivisible by 5: " + divisibleBy5.join(", "));
}

// Q3. Largest of three numbers
function q3() {
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
}

// Q4. Multiplication table
function q4() {
  const num = Number(prompt("Enter a number:"));
  let result = "";

  for (let i = 1; i <= 10; i++) {
    result += num + " x " + i + " = " + (num * i) + "\n";
  }

  show(result);
}

// Q5. Sum of 1 to 100 using while loop
function q5() {
  let i = 1;
  let sum = 0;

  while (i <= 100) {
    sum += i;
    i++;
  }

  show("Sum of numbers from 1 to 100 = " + sum);
}

// Q6. Simple login system
function q6() {
  const username = prompt("Enter username:");
  const password = prompt("Enter password:");

  if (username === "admin" && password === "12345") {
    show("Login Successful");
  } else {
    show("Invalid Username or Password");
  }
}

document.getElementById("btnQ1").addEventListener("click", q1);
document.getElementById("btnQ2").addEventListener("click", q2);
document.getElementById("btnQ3").addEventListener("click", q3);
document.getElementById("btnQ4").addEventListener("click", q4);
document.getElementById("btnQ5").addEventListener("click", q5);
document.getElementById("btnQ6").addEventListener("click", q6);