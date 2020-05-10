const express = require("express");
const PORT = 8080;

const bodyParser = require("body-parser");

const feedRoutes = require("./routes/feed");
const app = express();

// app.use(bodyParser.urlencoded()); //x-www-form-urlencoded
app.use(bodyParser.json()); //application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); //not send yet //* 어디서든 우리 서버에 접근 가능하다.
  // res.setHeader(
  //   "Access-Control-Allow-Methods",
  //   "GET, POST, PUT, PATCH, DELETE",
  // );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);

app.listen(PORT);

//solve cors error cors error is 서버가 다를때 발생한다.
