const express = require('express');
const helmet = require('helmet');

const RecipesRouter = require('./recipes/recipesRouter');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api', RecipesRouter);

server.get('/', (re,res) => {
  res.status(200).json({ message: "Server is up and running" });
});

module.exports = server;