//Build a simple express server
const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res){
  res.send("<p>Contact me at: calebcox2010@gmail.com</p>");
});

app.get("/about", function(req, res){
  res.send("<p>Caleb Cox is a sexy, confident, young stud from the Lone Star State.</p>"
+ "<p>When he's not working towards his career goals, you can find him snacking in the kitchen.</p>"
+ "<p>Afterall, food is the key to his heart.</p>");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Food</li><li>Beer</li><li>Code</li></ul>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000")
});
