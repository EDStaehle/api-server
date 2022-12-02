'use strict';
const { app } = require('../src/server.js');
const supertest = require('supertest');
const {sequelizeDatabase} = require('../src/models/index.js');
const request = supertest(app);

beforeAll(async () =>{
  await sequelizeDatabase.sync();
});
afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('REST API', () => {
  test('handles invalid requests' , async () => {
    const response = await request.get('/foo');

    expect(response.status).toEqual(404);
  });
  it('handles errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
  });
  // -----------------
  test('creates a game', async () => {
    let response = await request.post('/games').send({
      prodName: 'Call of Duty MW2',
      releaseDate: 2022,
      company: 'Infinity Ward',
    });
    expect(response.status).toEqual(200);
    console.log(response.body,'-----------------------------');
    expect(response.body.prodName).toEqual('Call of Duty MW2');
    expect(response.body.releaseDate).toEqual(2022);
    expect(response.body.company).toEqual('Infinity Ward');
  });
  test('finds all games', async () => {
    let response = await request.get('/games');
    expect(response.status).toEqual(200);
    expect(response.body[0].prodName).toEqual('Call of Duty MW2');
    expect(response.body[0].releaseDate).toEqual(2022);
    expect(response.body[0].company).toEqual('Infinity Ward');
  });
  test('finds a game', async () => {
    let response = await request.get('/games/1');
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1)
    expect(response.body.prodName).toEqual('Call of Duty MW2');
    expect(response.body.releaseDate).toEqual(2022);
    expect(response.body.company).toEqual('Infinity Ward');
  });
  test('updates a game', async () => {
    await request.put('/games/1').send({
      prodName: 'Call of Duty MW3',
      releaseDate: 2025,
      company: 'Infinity Ward',
    });
    let response =  await request.get('/games/1')

    expect(response.status).toEqual(200);
    expect(response.body.prodName).toEqual('Call of Duty MW3');
    expect(response.body.releaseDate).toEqual(2025);
    expect(response.body.company).toEqual('Infinity Ward');
  });
  test('delete a game', async () => {
    let response = await request.delete('/games/1')
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('deleted')
  });
  // -------------------------
  test('creates a car', async () => {
    let response = await request.post('/cars').send({
      name: 'Call of Duty MW2',
      type: 'suv',
      company: 'Infinity Ward',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Call of Duty MW2');
    expect(response.body.type).toEqual('suv');
    expect(response.body.company).toEqual('Infinity Ward');
  });
  test('finds all cars', async () => {
    let response = await request.get('/cars');
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Call of Duty MW2');
    expect(response.body[0].type).toEqual('suv');
    expect(response.body[0].company).toEqual('Infinity Ward');
  });
  test('finds a car', async () => {
    let response = await request.get('/cars/1');
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1)
    expect(response.body.name).toEqual('Call of Duty MW2');
    expect(response.body.type).toEqual('suv');
    expect(response.body.company).toEqual('Infinity Ward');
  });
  test('updates a car', async () => {
    await request.put('/cars/1').send({
      name: 'Call of Duty MW3',
      type: 'suv',
      company: 'Infinity Ward',
    });
    let response = await request.get('/cars/1')
    expect(response.status).toEqual(200);
    console.log(response.body,'0000000000000000000002342343245234344234432432')
    expect(response.body.name).toEqual('Call of Duty MW3');
    expect(response.body.type).toEqual('suv');
    expect(response.body.company).toEqual('Infinity Ward');
  });
})
