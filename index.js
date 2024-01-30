console.log("hello world");
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Ask the user for input
// rl.question('Enter the first number: ', (num1) => {
//   rl.question('Enter the second number: ', (num2) => {
//     // Convert input strings to numbers
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);

//     if (!isNaN(num1) && !isNaN(num2)) {
//       // Call the add function with the user input
//       const sum = add(num1, num2);
//       console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
//     } else {
//       console.log('Invalid input. Please enter valid numbers.');
//     }

//     // Close the readline interface
//     rl.close();
//   });
// });

// // Function to add two numbers
// function add(a, b) {
//   return a + b;
// }

const express = require('express');
const app = express();
const mongoose = require("./db");
const port = 3000;
// const User = require('./models/userModel');
const routes = require('./routes/routes');
app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});