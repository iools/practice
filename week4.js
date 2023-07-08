// #### Practice
// 1. Create a password checker function that takes one password returns true if the password is equal to 'strong-password', otherwiese return false.
// 2. Create a postive number checker function that takes 2 input, if both numbers are positive, return true. If not both number are postive, return false.
// 3. Create a function that takes, 7 number input (temperature for each day). If any of the day, exceed 90 degree, then print (it's too hot!), otherwise, print ('It's pretty cool')
// 4. Create a function to takes 2 number input. Return the highest number.

// Question 1
let password = "strong-password";
function passwordChecker(password) {
  if (password === "strong-password") {
    return true;
  } else {
    return false;
  }
}
console.log(passwordChecker(password));

// Question 2
function positiveChecker(number1, number2) {
  if (number1 > 0 && number2 > 0) {
    return true;
  } else {
    return false;
  }
}
console.log(positiveChecker(1, -2));

// Question 3
function tempChecker(n1, n2, n3, n4, n5, n6, n7) {
  if (
    n1 > 90 ||
    n2 > 90 ||
    n3 > 90 ||
    n4 > 90 ||
    n5 > 90 ||
    n6 > 90 ||
    n7 > 90
  ) {
    return "it's too hot";
  } else {
    return "it's pretty cool";
  }
}
console.log(tempChecker(1, 2, 3, 4, 5, 6, 100));

// Question 4
function numbReturn(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else if (n2 > n1) {
    return n2;
  } else {
    return n1;
  }
}
console.log(numbReturn(3, 2));

// Loop
function forLoop() {
  for (let i = 0; i < 100; i = i + 1) {
    console.log(i * i);
  }
}
forLoop();

function oddLoop() {
  for (let i = 0; i < 100; i = i + 1) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}
oddLoop();
