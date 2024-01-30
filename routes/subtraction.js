const express = require("express");
const router = express.Router();

function sub(a, b) {
    return a - b;
  }
  router.put('/sub', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);

    
    const result = sub(num1, num2);
    res.send(`Subraction result: ${result}`);
});

module.exports = router;