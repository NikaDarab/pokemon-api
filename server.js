/* eslint-disable quotes */
/* eslint-disable no-console */
//imports
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const POKEDEX = require("./pokedex.json");
console.log(process.env.API_TOKEN);
//make an instance of the express
const app = express();

//using the morgan middleware
app.use(morgan("dev"));
//validate middleware
app.use(function valitedateBearerToken(req, res, next) {
  const apiToken = process.env.API_TOKEN;
  const authoTaken = req.get("Authorization");
  console.log("validate bearer token middleware");
  if (!authoTaken || authoTaken.split(" ")[1] !== apiToken) {
    return res.status(401).json({ error: "Unauthorized request" });
  }
  //move to the next line
  next();
});
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
app.get("/types", function handleGetTypes(req, res) {
  res.json(validTypes);
});
app.get("/pokemon", function handleGetPokemon(req, res) {
  let response = POKEDEX.pokemon;

  //filter our pokemon by name if name query params is present
  if (req.query.name) {
    response = response.filter((pokemon) =>
      pokemon.name.includes(req.query.name)
    );
  }

  //filter our pokemon by type if present
  if (req.query.type) {
    response = response.filter((pokemon) =>
      pokemon.type.includes(req.query.type.toLowerCase())
    );
  }
  res.json(response);
});

const PORT = 8000;
//listening to the port
app.listen(PORT, () => {
  console.log(`server is listening at http://localhost:${PORT}`);
});
