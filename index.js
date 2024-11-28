const express = require('express');
const app = express();

// Definisikan route untuk GET request di root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Tentukan port yang akan digunakan
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
