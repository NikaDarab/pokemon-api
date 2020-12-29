//imports
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
console.log(process.env.API_TOKEN);
//make an instance of the express
const app = express();

//using the morgan middleware
app.use(morgan("dev"));
//array of valid types
const validTypes = [
  `Bug`,
  `Dark`,
  `Dragon`,
  `Electric`,
  `Fairy`,
  `Fighting`,
  `Fire`,
  `Flying`,
  `Ghost`,
  `Grass`,
  `Ground`,
  `Ice`,
  `Normal`,
  `Poison`,
  `Psychic`,
  `Rock`,
  `Steel`,
  `Water`,
];
//create an endpoint
function handleGetTypes(req, res) {
  res.json(validTypes);
}

function handleGetPokemon(req, res) {
  res.send("Hello, Pokemon!");
}

app.get("/types", handleGetTypes);
app.get("/pokemon", handleGetPokemon);

const PORT = 8000;
//listening to the port
app.listen(PORT, () => {
  console.log(`server is listening at http://localhost:${PORT}`);
});
