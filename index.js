const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to my app'
  });
})

app.get('/ola', (req, res) => {
  console.log(req.query);
  res.send('Ola Samuel');
})

app.listen(port, () => {
  console.log('listening on port ' + port);
});
