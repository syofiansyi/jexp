const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Ekspor handler untuk digunakan oleh Vercel
module.exports = (req, res) => {
  app(req, res);
};
