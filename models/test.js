//Implementing CRUD operatiions using test.js (Create, Read, Update, Delete)

const mongoose = require('mongoose')
const BlogPost = require('/models/BlogPost')
mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true});

// Creating a new blog post document in the "BlogPost" collection

BlogPost.create({
    title: "The Mythbuster's Guide to saving Money on Energy Bills",
    body: "If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once yopu get past the boring bullet point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everytime at this time of the year."
}, (error, createdPost) => {
    if (error) {
        console.error('Error creating blog post:', error);
    } else {
        console.log('Blog post created successfully:', createdPost);
    }
});

application.listen(3000, () =>{
    console.log("DBS connected on port 3000")
})




//Implementing CRUD operatiions using test.js (Create, Read, Update, Delete)

const mongoose = require('mongoose')
const BlogPost = require('/models/BlogPost')
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

// Creating a new blog post document in the "BlogPost" collection

BlogPost.create({
    title: "The Mythbuster's Guide to saving Money on Energy Bills",
    body: "If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once yopu get past the boring bullet point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everytime at this time of the year."
}, (error, createdPost) => {
    if (error) {
        console.error('Error creating blog post:', error);
    } else {
        console.log('Blog post created successfully:', createdPost);
    }
});