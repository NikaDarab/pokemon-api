//imports
const express = require("express");
const morgan = require("morgan");

//make an instance of the express
const app = express();

//using the morgan middleware
app.use(morgan("dev"));

//post a message
app.use((req, res) => {
  res.send("Pokemon go!");
});
const PORT = 8000;
//listening to the port
app.listen(PORT, () => {
  console.log(`server is listening at http://localhost:${PORT}`);
});
