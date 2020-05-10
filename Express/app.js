const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product' , (req,res,next) => {
  res.send(`<form action ="/add" method="POST"><input type ="text" name="title"><button type="submit">send</button></form>`)
});

app.use('/add',(req,res,next) => {
  console.log(req.body);
  res.redirect('/');
});



app.listen(PORT);