// let i = 10;
// while (i !== 0) {
//   console.log(i);
//   i = i - 1;
// }

//Easy
// - Use a while loop to print out all the even numbers less than 100
let i = 0;
while (i < 100) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i += 1;
}
// - Create an array of string that has a lenght of five. Use a while loop to print out all the elements in the array.
const numbers = [1, 2, 3, 4, 5];
let a = 0;
while (a !== numbers.length) {
  console.log(numbers[a]);
  a += 1;
}

// Medium

// - Use a while loop to count how many times a certain letter appears in a string. For instance, if the input is "Hello, World!"
//  and the letter to count is 'l', the output should be 3.

function stringInput(input) {
  let output = 0;
  let s = 0;
  while (s < input.length) {
    s = s + 1;
    if (input[s] === "a") {
      output = output + 1;
    }
  }
  console.log(output);
}

stringInput("apple");

// - Use a while loop to reverse a string. For example, if the input is "Hello, World!", the output should be "!dlroW ,olleH".

// - Use a while loop to calculate the sum of all numbers less than 100

// Hard

// - Use a while loop, find how many power of 2 is greater than 1000
