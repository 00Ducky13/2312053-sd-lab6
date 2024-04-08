const express = require('express');
const app = express();



app.use(express.json());

const cars = require('./src/cars.json');



module.exports = async function (context, request) {
    context.log('Http function was triggered.');
    context.res(cars);
};