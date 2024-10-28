const restaurant = require("./api/restaurant.json");
const express = require("express");
const app = express();
const port = 3000;

app.use("/", (req, res, next) => {
    // console.log("hello")
    next()
//   res.send("Hello middle World!");
});

app.use("/up", express.static('uploads'))

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/name", (req, res) => {
  res.json("Somrooppp!");
});

app.get("/res", (req, res) => {
  res.json(restaurant.name);
});

app.get("/menu", (req, res) => {
  res.json(restaurant.menu);
});

app.listen(port, () => {
  console.log(`ringringringhttp://localhost:${port}`);
});
