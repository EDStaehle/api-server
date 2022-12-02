'use strict';

const express = require('express');

const { gamesInterface, orderInterface } = require('../models');




const gamesRouter = express.Router();

gamesRouter.get('/games', async (req, res, next) => {
  try {
    const games = await gamesInterface.read();
    res.status(200).send(games)
  } catch (e) {
    next(e);
  }
});
gamesRouter.get('/games/:id', async (req, res, next) => {
  const {id} = req.params;
  try {
    const game = await gamesInterface.read(id)
    res.status(200).send(game)
  } catch (e) {
    next(e);
  }
});
// gamesRouter.get('/gamesWithOrders/:id', async (req, res, next) => {
//   const {id} = req.params;
//   try {
//     const gamesWithOrders = await gamesInterface.readManyToOne(id, orderInterface.model)
//     res.status(200).send(gamesWithOrders);
//   } catch (e) {
//     next(e);
//   }
// });
gamesRouter.put('/games/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    console.log(id,'000000000000000000000000000000');
    const updatedGames = await gamesInterface.write(req.body, id)

    res.status(200).send(updatedGames)
  } catch (e) {
    next(e);
  }
});
gamesRouter.delete('/games/:id', async (req, res, next) => {
  const {id} = req.params;
  try {
       await gamesInterface.delete(id)
    res.status(200).send('deleted')
  } catch (e) {
    next(e);
  }
});
gamesRouter.post('/games', async (req, res, next) => {
  try {
    const newGame = await gamesInterface.create(req.body);
    res.status(200).send(newGame);
  } catch (e) {
    next(e);
  }
});
module.exports = gamesRouter

