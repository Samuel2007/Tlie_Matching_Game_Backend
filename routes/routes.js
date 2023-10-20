const express = require("express");
const Model = require("../model/model");
const bodyParser = require("body-parser");
const router = express.Router();

router.post("/post", bodyParser.json(), async (req, res) => {
  console.log(req);
  const data = new Model({
    name: req.body.name,
    time: req.body.time,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
