//imports
const express = require("express");
const morgan = require("morgan");

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

app.get("/types", handleGetTypes);
const PORT = 8000;
//listening to the port
app.listen(PORT, () => {
  console.log(`server is listening at http://localhost:${PORT}`);
});
