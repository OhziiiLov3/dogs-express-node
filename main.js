// Express JS
//  Load express from node_modules
const express = require("express");
// create express app -> creates object from express function
const app = express()

// Config Variable 
const PORT = 4000;
//  set up middleware 
app.set('view engine', 'ejs')

// Import Models
const dogs = require('./models/dog_model')

/* === Routes === */


app.get('/', function (req,res) {
    res.send(`
    <h1>Hello World</h1>
    <h2>${dogs[0]}</h2>
    <h2>${dogs[1]}</h2>
    <h2>${dogs[2]}</h2>`)
})
// 
app.get('/dogs/:dogIndex', (req,res) => {
    // res.send(dogs[req.params.dogIndex])
    res.render('show.ejs',{oneDog: dogs[req.params.dogIndex]})
})

app.get('/dogs/',(req,res)=>{
    res.send(dogs)
})

// routes/controllers -> /greetings?firstName=Zooty&lastName=World
app.get('/greetings', (req, res) => {
    res.send(`Hello, ${req.query.firstName} ${req.query.lastName}`)
})


app.get("/add", (req, res) => {
  const sum = parseInt(req.query.x) + parseInt(req.query.y);
  res.send(`${req.query.x} + ${req.query.y} = ${sum}`);
});




// // Params 
// //  variables within url 
// app.get("/r/:name",function (req,res) {
//     res.send(`Welcome to r/${req.params.name}`)
// })

// query params 

// app.get("search",function (req, res) {
//     console.log(request.query)
//     res.send("search")
// })

//  Tell app to listen on port 3000 

app.listen(PORT, function () {
    console.log('Listening on port 4000');
})


