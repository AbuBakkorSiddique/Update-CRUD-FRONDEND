const express = require('express') ; 
const app=express() ; 
const bodyParser= require('body-parser') ; 
const mongoose=require('mongoose') ; 
const api=require('./src/Router/api');
const cors=require('cors') ; 
const path=require('path'); 

// enable cors 
app.use(cors()) ; 

// connection mongoose 

// mongo db atlast er crudproject 
const URI= "mongodb+srv://smd994753:<password>@cluster0.yp1gfdk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 

const  OPTION={user:'smd994753',pass:'01933114716',autoIndex:true}
mongoose.connect(URI,OPTION) 
.then((data)=>{
    console.log(`Mongo DB Connected Successfully ..... `)
})
.catch((err)=>{
    console.log(`Mongo DB Connection Faild  ERROR : ${err}`)
}) ; 

// enable body parser 
app.use(bodyParser.json()) ; 
app.use(express.json()) ; 




app.use(api);

//static file 

app.use(express.static('client/my-app/dist')) ; 

// Serve React frontend
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client','my-app', 'dist', 'index.html'));
});






module.exports= app ; 