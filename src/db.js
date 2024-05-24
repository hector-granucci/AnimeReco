const { Sequelize } = require("sequelize");
const Animes = require("./models/Animes")
const User = "postgres";
const pass = "marvel";
const dbname = "anime";

const database = new Sequelize(
    `postgres://${User}:${pass}@localhost:5432/${dbname}`,
    {logging: false }
);

Animes(database)

console.log(database.models)

module.exports = {database, ...database.models};