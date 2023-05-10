const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  time: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Data", dataSchema);
