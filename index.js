const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

const db = {
  answers: [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes- definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
  ],
};
const app = express();

// configuration
// middlewares

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());

// controllers
app.get("/hello", (request, response) => {
  response.send("hello");
});

app.get("/answers/random", (request, response) => {
  const randomIndex = Math.floor(Math.random() * db.answers.length);
  const answer = db.answers[randomIndex];
  response.send({ answer });
});

app.post("/answers", (request, response) => {
  console.log(request.body);
  const { answer } = request.body;
  if (answer == "" || undefined)
    return response.status(500).send({ error: "Invalid answer" });
  db.words.push(answer);
  response.sendStatus(201);
});

app.get("/answers", (request, response) => {
  response.send(db.answers);
});

app.use(express.static(__dirname + "/public"));

app.listen(PORT, () => {
  console.log("Server started on http://localhost:3000");
});
