const { Sequelize } = require("sequelize");
const Animes = require("./models/Animes")

require('dotenv').config();

const user = process.env.USER
const pass = process.env.PASS
const dbname = process.env.DBNAME

const database = new Sequelize(
    `postgres://${user}:${pass}@localhost:5432/${dbname}`,
    {logging: false }
);

Animes(database)

console.log(database.models)

module.exports = {database, ...database.models};