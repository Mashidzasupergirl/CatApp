const express = require('express');
const app = express();
const port = 3001;
const unirest = require("unirest");

app.get('/api/allcats', (req, res) => {
  const request = unirest("GET", "https://api.thecatapi.com/v1/breeds");
  // request.query({ "entry": req.params.word });
  request.headers({
    "x-api-key": "skopiruj iz zametok", // TODO: read from .env
  });

  request.end(function (response) {
    if (response.error) throw new Error(response.error);
    console.log(response.body)
    res.json(response.body || {});
  });

});

app.listen(port, () => {
  console.log(`Maria's app listening at http://localhost:${port}`);
});