const express = require("express");
const Model = require("../model/model");
const bodyParser = require("body-parser");
const router = express.Router();

router.post("/post", bodyParser.json(), async (req, res) => {
  const data = new Model({
    name: req.body.name,
    time: req.body.time,
    level: req.body.level,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAll/:level", async (req, res) => {
  console.log(req.params.level);
  try {
    const data = await Model.find();
    const newData = data.filter((obj) => obj.level === req.params.level);
    res.json(newData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
