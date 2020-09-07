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
  quotes: [
    "You are not a drop in the ocean. You are the entire ocean in a drop.",
    "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
    "Come, seek, for search is the foundation of fortune: every success depends upon focusing the heart.",
    "Gamble everything for love, if you are a true human being. Halfheartedness does not reach into majesty.",
    "Lovers don’t finally meet somewhere. They’re in each other all along.",
    "Why are you so enchanted by this world, when a mine of gold lies within you?",
    "You were born with wings, why prefer to crawl through life?",
    "There is a voice that doesn’t use words. Listen.",
    "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
    "If you are irritated by every rub, how will you be polished?",
    "Let the beauty of what you love be what you do.",
    "This is love: to fly toward a secret sky, to cause a hundred veils to fall each moment. First to let go of life. Finally, to take a step without feet.",
    "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
    "Let yourself be silently drawn by the stronger pull of what you really love.",
    "What you seek is seeking you.",
    "Don’t grieve. Anything you lose comes round in another form.",
    "Where there is ruin, there is hope for a treasure.",
    "Raise your words, not voice. It is rain that grows flowers, not thunder.",
    "Wear gratitude like a cloak and it will feed every corner of your life.",
    "There are a thousand ways to kneel and kiss the earth.",
    "Yesterday is gone and its tale told. Today new seeds are growing.",
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
  const randomAnswer = Math.floor(Math.random() * db.answers.length);
  const answer = db.answers[randomAnswer];
  response.send({ answer });
});

app.get("/quotes/random", (request, response) => {
  const randomQuote = Math.floor(Math.random() * db.quotes.length);
  const quote = db.quotes[randomQuote];
  response.send({ quote });
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

app.get("/quotes", (request, response) => {
  response.send(db.answers);
});

app.use(express.static(__dirname + "/public"));

app.listen(PORT, () => {
  console.log("Server started on http://localhost:3000");
});
