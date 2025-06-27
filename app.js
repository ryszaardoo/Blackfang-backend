const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Backend BLACKFANG działa poprawnie.');
});

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});