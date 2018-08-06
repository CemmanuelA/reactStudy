const express = require('express');
// const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(PORT, () => {
  console.log(`Server is listening ogn port ${PORT}`);
});

/* mongoose.connect('mongodb://localhost:27017/empresa', (err, res) =>{
  if (err) {
    console.log(`Error al conectar la base de datos ${}`);
  }
  console.log('conexión a la base de datos establecida...');
  app.listen(PORT, () => {
    console.log(`Server is listening ogn port ${PORT}`);
  });
}); */
