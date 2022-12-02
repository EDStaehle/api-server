'use strict';

const express = require('express');
const { carsInterface } = require('../models');
const carsRouter = express.Router();

carsRouter.get('/cars', async (req, res, next) => {
  try {
    const cars = await carsInterface.read();
    res.status(200).send(cars)
  } catch (e) {
    next(e);
  }
});
carsRouter.get('/cars/:id', async (req, res, next) => {
  try {
    const car = await carsInterface.read(req.params.id)

    res.status(200).send(car)
  } catch (e) {
    next(e);
  }
});

carsRouter.put('/cars/:id', async (req, res, next) => {
  try {

    const updatedcars = await carsInterface.write(req.body,req.params.id)
    res.status(200).send(updatedcars)
  } catch (e) {
    next(e);
  }
});
carsRouter.delete('/cars/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    await carsInterface.delete(id)
    res.status(204).send('deleted')
  } catch (e) {
    next(e);
  }
});
carsRouter.post('/cars', async (req, res, next) => {
  try {
    const newCar = await carsInterface.create(req.body)
    res.status(200).send(newCar);
  } catch (e) {
    next(e);
  }
});
module.exports = carsRouter

