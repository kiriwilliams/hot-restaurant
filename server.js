//require express and path modules
const express = require("express");
const path = require("path");

//set up Express App
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


var reservations = [];
var waitlist = [];

//Default route
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));

    for(var i = 0; i < reservations.length; i++){
        var newCard = $("<div class='card'></div>");

    }
});

app.post("/api/reserve", function(req, res) {
    var newReservation = req.body;

    console.log(newReservation);
    if(reservations.length < 5){
        reservations.push(newReservation);
    }
    else{
        waitlist.push(newReservation);
    }

    res.json(newReservation);
})


//START SERVER
app.listen(PORT, function(){
    console.log("App listening on PORT "+ PORT);
});