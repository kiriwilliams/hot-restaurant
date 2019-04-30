//require express and path modules
const express = require("express");
const path = require("path");

//set up Express App
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


//Default route
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});


//START SERVER
app.listen(PORT, function(){
    console.log("App listening on PORT "+ PORT);
});