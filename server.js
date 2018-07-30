var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");

const app = express();
//grab the port number for heroku
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "view.html"));
    //res.sendFile(__dirname + "/views/view.html");
});

app.listen(PORT, function(){
    console.log(`App listening on PORT ${PORT}`);
});
