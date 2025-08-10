const express = require('express');
const sequelize = require('./config/database');

const app = express();
const port = 3000;

const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes);

app.get('/', (req, res) => {
  res.send('API rodando com Sequelize + MySQL!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});