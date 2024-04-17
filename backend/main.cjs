const express = require('express');
const mongoose = require('mongoose');
const sampleData = require('./models/sample.cjs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json());



// All sample data API
app.get('/api/sampleData', async (req, res) => {
  try {
    const Data = await sampleData.find();
    // res.json(Data);
    res.send(Data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
