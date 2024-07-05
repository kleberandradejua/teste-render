// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({ message: 'Hello World' });
});

app.get('/items/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  res.send({ itemId, query: req.query.q });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
