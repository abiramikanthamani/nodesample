const express = require("express");
const router = express.Router();

function add(a, b) {
    return a + b;
  }
  router.put('/add', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);

    
    const result = add(num1, num2);
    res.send(`Addition result: ${result}`);
});
function multiply(a, b) {
  return a * b;
}

// Division
function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Cannot divide by zero!";
  }
}

router.put('/multiply', (req, res) => {
  const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
  const result = multiply(num1,num2);
  res.send(`Multiplication result: ${result}`);
});

// Division route with PUT method
router.put('/divide', (req, res) => {
  const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
  const result = divide(num1,num2);
  res.send(`Division result: ${result}`);
});
 
module.exports = router;