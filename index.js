const express = require('express');
const app = express();
app.get('/', (_req, res) => {
  res.write('Hello world!');
  res.end();
});

app.listen(process.env.PORT || 3000);
