
import express from 'express'
import mongoose from 'mongoose'
import bugRoutes from './routes/bugRoutes'
import userRoutes from './routes/userRoutes'
import { default as fetech } from 'node-fetch'




//const app = express()
const app = require('express')
const port = 6000


mongoose.connect('mongodb://127.0.0.1:27017/Edureka', { useUnifiedTopology: true, useNewUrlParser: true })
const connection = mongoose.connection;
connection.once('open', () => {
    console.log(" Database has been connected..")

})

app.set('view engin', ejs)
app.use('./api', bugRoutes)


//it will get call when url is blank like 6500
app.get('/', function (request, response) {
    fetch('http://localhost:6000/api/bug', { method: 'GET' })
        .then(res => res.json())
        .then(json =>{
            console.log(json)
            response.render('index', { data: JSON.stringify(json) })
        });
})

app.get('/addUser', function(req, res){
    res.render('admin')
})
app.listen(port, ()=>{
    console.log("App is startted at port number : 6000!!")
})