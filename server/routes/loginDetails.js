const express = require("express");

const RoomTypeMaster = require("../Models/login");
const mongoose = require("mongoose");
const login = require("../Models/login");

mongoose.connect(
  `mongodb+srv://sathishm2408:${encodeURIComponent(
    "S@chu2408"
  )}@cluster0.ifzlg.mongodb.net/BookingEngine?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const router = express.Router();

router.post('/signup', (req, res) => {

  let user = new login(req.body);
  console.log(user);
  user.save().then(() => {
    res.send({ user, message: "Successfully registered" });
  }).catch((err) => {
    if (err.code == 11000)
      res.status(400).send({ message: "User already exist.Use different email or username." });
    console.log(err);
    // throw new Error('Error while saving User model')
  });
});

router.get('/signup/details', async (req, res) => {
  try {
    const posts = await login.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;