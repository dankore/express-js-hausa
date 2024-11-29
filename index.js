const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function (request, response) {
  response.send('Barka duniya!');
});

app.get('/barka', function (request, response) {
  const { suna } = request.query
  response.send(suna);
});

app.listen(PORT, function () {
  console.log('Server listening on port ', PORT);
})