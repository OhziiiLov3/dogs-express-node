const express = require("express");
const dogs = require("../models/dog_model");
const router = express.Router()





router.get("/", function (req, res) {
  res.send(`<h1>Hello World</h1>
  <a href="/dogs">Dogs</a>`);
});

router.get('/dogs', (req, res) => {
    // res.send(dogs);
   const context = {
    allDogs: dogs
   }
//    console.log(context);
   res.render("dogs/index.ejs", context)
});

router.get("/dogs/:dogIndex", (req, res) => {
  // res.send(dogs[req.params.dogIndex])
  const context ={
    oneDog: dogs[req.params.dogIndex]
  }
  res.render("dogs/show.ejs", context);
});

module.exports = router;