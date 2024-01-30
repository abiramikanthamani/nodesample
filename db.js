const mongoose = require('mongoose');

// Replace the connection string with your MongoDB connection string
const uri = 'mongodb+srv://abiramikanthamani:nodejsdemo@cluster0.z5wsl1e.mongodb.net/?retryWrites=true&w=majority';


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  // Perform database operations here
});
