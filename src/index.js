const express = require('express');
const { route } = require('./routes/main');
const routes = require('./routes/main')
const hbs = require('hbs'); // template engine
const mongoose = require('mongoose')
const details = require('./models/details')

const app = express();

app.use('', routes);
app.use("/static",express.static("public"));

//template engine setup
app.set('view engine', 'hbs')
app.set('views', 'views')

hbs.registerPartials("views/partials")

mongoose.connect("mongodb://127.0.0.1:27017/website-tut",()=>{
    console.log("connected database")
    // details.create({
    //     brandName : "sathi computers",
    //     brandIconUrl : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    //     links : [
    //         {
    //             label : "Home",
    //             url : "/"
    //         },
    //         {
    //             label : "Services",
    //             url : "/services"
    //         },
    //         {
    //             label : "Gallery",
    //             url : "/gallery"
    //         },
    //         {
    //             label : "About Us",
    //             url : "/about"
    //         },
    //         {
    //             label : "Contact Us",
    //             url : "/contact-us"
    //         },
    //     ]
    // })
});


app.listen(process.env.PORT | 5500,()=>{
    console.log("server started");
});