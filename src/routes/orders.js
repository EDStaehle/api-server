'use strict';

const express = require('express');
const { orderModel } = require('../models');
const { orderInterface } = require('../models');
const ordersRouter = express.Router();

ordersRouter.get('/orders', async (req, res, next) => {
  try {
    const games = await orderInterface.read();
    res.status(200).send(games)
  } catch (e) {
    next(e);
  }
});
ordersRouter.get('/orders/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const game = await orderInterface.read(id)
    res.status(200).send(game)
  } catch (e) {
    next(e);
  }
});

ordersRouter.put('/orders/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const updatedGames = await orderInterface.write(req.body, id)

    res.status(200).send(updatedGames)
  } catch (e) {
    next(e);
  }
});
ordersRouter.delete('/orders/:id', async (req, res, next) => {
  try {
    const {id} = req.params
        await orderInterface.delete(id)
    res.status(204).send('deleted')
  } catch (e) {
    next(e);
  }
});
ordersRouter.post('/orders', async (req, res, next) => {
  try {
    const newGame = await orderInterface.create(req.body);
    res.status(200).send(newGame);
  } catch (e) {
    next(e);
  }
});
module.exports = ordersRouter

