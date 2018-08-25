var express = require('express');
var app = express();
var request = require("request");
var bodyParser = require("body-parser");
var path = require("path");

//for express to use 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(express.static('views'))
// app.set("view engine", "html");

var burgers = [
     {name: "Blue cheese"},
]

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'/index.html'));
    //__dirname : It will resolve to your project folder.
  });

//home page
app.get('/burger', function(req, res){
    // console.log(typeof burgers);

    console.log(burgers);
    res.sendFile(path.join(__dirname,'views/burger.html'), {burgers: burgers});
})

app.get("/burger/new", function(req, res) {
    res.sendFile(path.join(__dirname, "views/new.html"));
  });


app.post("/burger", function(req, res){
    //get data from burger form and add it to the burgers array
    var name = req.body.name;
    console.log(name);
    var newBurger = {name: name};
    burgers.push(newBurger);

    //redirect back to burger home page
    res.redirect('burger');
})

// app.get("/burger/new", function(req, res){
//     res.render('views/new');
// })

// app.get("/campgrounds", function(req, res){
//     //very important the second campground is the array and the first campgrounds is goes to the campgrounds 
//     res.render("campgrounds", {campgrounds: campgrounds});
// })

// app.post("/campgrounds", function(req, res){
//     //get data from form and add data to campgrounds array
//     var name = req.body.name;
//     var image = req.body.image;
//     var newCampground = {name: name, image: image};
//     campgrounds.push(newCampground);
//     //redirect back to campgrounds page
//     res.redirect("/campgrounds");
// });

// app.get("/campgrounds/new", function(req, res){
//     res.render("new");
// });


//listen PORT
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });