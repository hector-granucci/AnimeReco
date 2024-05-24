const express = require("express");
const morgan = require("morgan");
const {Animes} = require("./db")
const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.get("/animes", async (req,res) => {
    try {
        const animes = await Animes.findAll();
        res.status(200).send(animes)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

server.post("/animes", async (req,res) => {
    try {
        const {Nombre,  Sinopsis, Genero, Episodios,  Recomendacion} = req.body;
        const newAnimes = await Animes.create ({Nombre,  Sinopsis, Genero, Episodios,  Recomendacion});
        res.status(200).send(newAnimes)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

server.delete("/animes", async (req,res) => {
    try {
        const {id} = req.body;
        const animes = await Animes.findByPk(id);
        await animes.destroy();
        res.status(200).send(animes)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = server;