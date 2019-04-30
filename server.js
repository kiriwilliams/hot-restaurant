//require express and path modules
const express = require("express");
const path = require("path");

//set up Express App
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//START SERVER
app.listen(PORT, function(){
    console.log("App listening on PORT "+ PORT);
});