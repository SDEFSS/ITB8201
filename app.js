const express = require('express');
const app = express();
const port = process.env.port || 8080;

app.param('name', function(req, res, next, name) {
    req.name = name;
    next();
  });

app.get('/:name', (req, res, name) => {
    res.send(`Tere, ${req.name}!`)
  });
  
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  });