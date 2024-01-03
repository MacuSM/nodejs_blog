const express = require("express")
const app = new express()

const path = require('path');

const app = new express()
const ejs = require('ejs')
app.set('view engine', 'ejs') //used to tell Express to use EJS as our templating engine. Any file ending in .ejs should be rendered with EJS packages
app.get('/',(req,res)=>{
    res.render('index');
})

//Conntecting to MongoDB using Mongoose package

const install mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true})


app.use(express.static('public')) // registering public folder where static html files are stored

/*app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/index.html'))
    res.render('index.ejs');
})*/

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/about.html'))
    res.render('about');
})

app.get('/contact',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/contact.html'))
    res.render('contact');
})

app.get('/post',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/post.html'))
    res.render('post');
})

app.listen(4000, ()=>{
    console.log('App listening on port 4000')
});