// const express = require('express');
const mongoose = require('mongoose');
const app = require('../backend/app');
const port = 4001;


const DB_URL = "mongodb+srv://adhangit:p5X8aJ800C7IWKAT@cluster0.sexpzet.mongodb.net/onlineFoodDB";

mongoose.connect(DB_URL);

const db = mongoose.connection;

db.on('connected',() => {
    console.log('Connected to mongodb server'); 
});

db.on('error', () => {
    console.log('DB connection error');
});

db.on('disconnected', () => {
    console.log('Disconnected from mongodb server');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})