const express = require("express");
const User = require('../models/userModel'); 
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/signup',async (req,res)=>{
    try {
        const { name, email, password, dateOfBirth } = req.body;
    
        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ error: 'Email already exists. Please choose another email.' });
        }
    
        // Validate minimum age (16 years)
        const minAgeDate = new Date();
        minAgeDate.setFullYear(minAgeDate.getFullYear() - 16);
    
        if (new Date(dateOfBirth) > minAgeDate) {
          return res.status(400).json({ error: 'User must be at least 16 years old.' });
        }
    
        // Hash the password
        // const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create a new user
        const newUser = new User({
          name,
          email,
          password,
          dateOfBirth: new Date(dateOfBirth),
        });
    
        await newUser.save();
    
        return res.status(201).json({ message: 'User signed up successfully.' });
      } catch (error) {
        console.error('Error during signup:', error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

});

router.post('/login', async (req, res) => {
    try{
        const {email,password} =req.body;
        const user = await User.findOne({email});
        if (!user){
            return req.status(400).json({message: "does not exists"});

        }
        // user.password = await bcrypt.hash(user.password, 10);
        if (user.password != password){
            return res.status(400).json({message:"inncorrect password"})
        }
        // const token = jwt.sign({id: user._id},"passwordKey");
        // res.json({token,...user._doc});
    }catch(e){
        res.status(500).json({ error: e.message});
    }
  });

module.exports = router;