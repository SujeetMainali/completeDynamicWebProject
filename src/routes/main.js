const { response } = require('express');
const express = require ('express');
const details = require('../models/details')

const routes = express.Router()

routes.get('', async (request, response)=>{
    const Details  = await details.findOne({
        "_id" : "634c4f9e3e7a3d7b669543cc"
    })
    // console.log(Details)
    response.render("index", {
        Details : Details
    });

})

routes.get('/gallery', async (request, response)=>{
    const Details  = await details.findOne({
        "_id" : "634c4f9e3e7a3d7b669543cc"
    })
    response.render("gallery", {
        Details : Details
    })
});

routes.get('/services', async (request, response)=>{
    const Details  = await details.findOne({
        "_id" : "634c4f9e3e7a3d7b669543cc"
    })
    response.render("services", {
        Details : Details
    })
});

routes.get('/about', async (request, response)=>{
    const Details  = await details.findOne({
        "_id" : "634c4f9e3e7a3d7b669543cc"
    })
    response.render("aboutUs", {
        Details : Details
    })
});

routes.get('/contact-us', async (request, response)=>{
    const Details  = await details.findOne({
        "_id" : "634c4f9e3e7a3d7b669543cc"
    })
    response.render("contactUs", {
        Details : Details
    })
});



module.exports = routes