const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const db = {
  words: [
    "monkey",
    "lion",
    "giraffe",
    "zebra",
    "mouse",
    "beaver",
    "turtle",
    "horse",
    "tiger",
    "fox",
    "swan",
    "gorilla",
    "antelope",
    "goat",
    "rabbit",
  ],
};
const app = express();

// configuration
// middlewares
app.use(logger("dev"));
app.use(cors());

// controllers
app.get("/hello", (request, response) => {
  response.send("hello");
});

app.get("/words/random", (request, response) => {
  const randomIndex = Math.floor(Math.random() * db.words.length);
  const word = db.words[randomIndex];
  response.send({ word });
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
