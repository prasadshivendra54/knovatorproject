const mongoose = require("mongoose");

// Create Schema


// Use Mongoose to define the Job schema:

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true
    },
    company: {
      type: String,
      require: true
    },
    // type: {
    //   type : [{
    //     type : String,
    //     enum : ["Full time", "Part time"]
    // }]},
    type: {
      type: String,
      require: true
    },
    location: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    createdAt: { type: Date, default: Date.now }
    },
  { timestamps: true }
);

// Create Model
const Job = mongoose.model("Job", jobSchema);

module.exports = Job;


