const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const scoreRoutes = require('./routes/scores');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/scores', scoreRoutes);

app.get('/', (req, res) => {
  res.send('API Memory Game opérationnelle');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
