'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const notFound = require('./error-handlers/404');
const errorHandling = require('./error-handlers/500');
const PORT = process.env.PORT || 3002;
const gamesRouter = require('./routes/games')
const carsRouter = require('./routes/cars')
const app = express();
app.use(cors());
app.use(express.json());
app.use(gamesRouter);
app.use(carsRouter);

app.get('/', (req, res, next) => {
  res.status(200).send('Hello world');
});
app.get('/bad', (req, res, next) => {
  next('we have a problem')
})
app.use('*', notFound);
app.use(errorHandling);

function start() {
app.listen(PORT, () => console.log(`listening on ${PORT}`));
}

module.exports = { app, start }

