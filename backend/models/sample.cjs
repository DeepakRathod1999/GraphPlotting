const mongoose=require("mongoose");

const sample = new mongoose.Schema({
    ts: Date,
    machine_status: Number,
    vibration: Number,
  });


 module.exports= mongoose.model('Sample',sample);
