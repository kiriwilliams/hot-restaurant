//require express and path modules
const express = require("express");
const path = require("path");

//set up Express App
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var tables = {
    reservations: [],
    waitlist: []
};


//Default route
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));

});

app.get("/api/tables", function(req, res){
    return res.json(tables);
});

app.post("/api/reserve", function(req, res) {
    var newReservation = req.body;

    console.log(newReservation);
    if(tables.reservations.length < 5){
        tables.reservations.push(newReservation);
        return res.json(true);
    }
    else{
        tables.waitlist.push(newReservation);
        return res.json(false);
    }
});

app.post("/api/clear", function(req, res){
    tables.reservations = [];
    tables.waitlist = [];
    return res.json(true);
});


//START SERVER
app.listen(PORT, function(){
    console.log("App listening on PORT "+ PORT);
});