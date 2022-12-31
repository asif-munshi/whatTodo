const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  status: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("tasks", taskSchema);
