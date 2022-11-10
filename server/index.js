const express = require('express');
const app = express();
const port = 3001;
const unirest = require("unirest");
require('dotenv').config();

app.get('/api/allcats', (req, res) => {
  const request = unirest("GET", "https://api.thecatapi.com/v1/breeds");
  // request.query({ "entry": req.params.word });
  request.headers({
    "x-api-key": process.env.REACT_APP_API_KEY, // TODO: read from .env
  });

  request.end(function (response) {
    if (response.error) throw new Error(response.error);
    res.json(response.body || {});
  });

});

app.listen(port, () => {
  console.log(`Maria's app listening at http://localhost:${port}`);
});