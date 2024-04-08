const express = require('express');
const app = express();



app.use(express.json());

const cars = require('./src/cars.json');

module.exports = async function (context, req) {
    context.res.json({
        cars
    });
    console.log("Found it!")
};
