// server.js
console.log("JFD server.js Restart");

const express = require('express')
const app = express()

// this is used for render()
app.set("view engine", "ejs")

// use this for public?
app.use(express.static('public'));


// setup a route
// get has two parameters - the second is 
// a function/callback which has two
// or three parameters.
//
// 500 error
// 200 ok
// 404 not found
app.get('/', (req, res) => {

    console.log("get /")

    //res.sendStatus(500) // error on server
    // or
    //res.status(500) // error on server
    // or chain
    //res.status(500).send("HI") // error on server
    // or chain with json
    //res.status(500).json({message: "Error"}) // error on server
    // or just default status and json
    //res.json({message: "Error"}) // error on server
    // it seems only one send can work at a time?
    //res.send('Hi')
    // or a file
    //res.download('README.md')
    // or 
    //res.render("index")
    // or add some text 
    res.render("index", { text: "World" })
})




app.listen(3000)


