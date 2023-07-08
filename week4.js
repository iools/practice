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
