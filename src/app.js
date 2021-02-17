const geocode =require("./utils/geocode.js")
const forecast= require("./utils/forecast.js")
const path = require("path")
const express = require("express")
const hbs=require("hbs")
const app= express()
const viewpath = path.join(__dirname,"../templates/views")
const partialpath = path.join(__dirname,"../templates/partials")


app.set("view engine","hbs")
app.set("views",viewpath)
hbs.registerPartials(partialpath)
const publicpath = path.join(__dirname,"../public")
app.use(express.static(publicpath))
app.get("",(req,res)=>{
    res.render("index",{
        title : "Weather",
        name: "Nitish Goyal"
    })
})
app.get("/about",(req,res)=>{
    res.render("about",{
        title : "About me",
        name: "Nitish Goyal"
    })
})
app.get("/help",(req,res)=>{
    res.render("help",{
        title : "Help",
        name: "Nitish Goyal"
    })
})
app.get("/weather",(req,res)=>{
    if(!req.query.address)
    return res.send(
        {
            error:"please enter valid address"
        }
    )
    geocode(req.query.address,(error,{longitude,latitude,location})=>
    {
        console.log("hi0")
        if(error)
        return res.send(
            {
               
                e:error
            }
          )
          console.log("hi")
    forecast(longitude,latitude,(error,data)=>{
          if(error)
          return res.send(
            {
                error
            })
            console.log("hi2")
            res.send({
                forecast:data
            })
      
    })
})
})
app.get("/products",(req,res)=>{
    if(!req.query.search)
    return res.send(
        {
            error:"Please enter the input"
        })
    res.render({
        products:[] 
    })
    
     })
app.get("/help/*",(req,res)=>{
    res.render("404",{
        title : "Help Article not found",
        name: "Nitish Goyal"
    })
})
app.get("*",(req,res)=>{
    res.render("404",{
        title : "Page not found",
        name: "Nitish Goyal"
    })
})
app.listen(3000,()=>{
console.log("Server is up")
})