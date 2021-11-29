// import express from 'express';
import cors from 'cors';

//mongodb
require('./backend/config/db');

const app = require('express')();
const port = process.env.PORT || 3000;

const UserRouter = require('./backend/api/User');

// Para aceitar posteriormente dados de form
const bodyParser = require('express').json;

// Enable CORS
app.use(cors());

app.use(bodyParser());

app.use('/user', UserRouter)


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})