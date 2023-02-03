const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", async (req, res) => {
  let image = await axios("https://source.unsplash.com/random");
  res.send(`<img src="${image.request.res.responseUrl}" />`);
});

app.listen(3030, () => {
  console.log(`listening on http://localhost:3030`);
});
