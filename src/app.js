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
        const {Nombre, Imagen,  Sinopsis, Genero, Episodios,  Recomendacion} = req.body;
        const newAnimes = await Animes.create ({Nombre, Imagen,  Sinopsis, Genero, Episodios,  Recomendacion});
        res.status(200).send(newAnimes)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

server.put("/animes/:id", async (req, res) => {
    const { id } = req.params;
    const { Nombre, Imagen, Sinopsis, Genero, Episodios, Recomendacion } = req.body;

    try {
        const animes = await Animes.findByPk(id);
        if (!animes) {
            return res.status(404).send({ error: 'Anime not found' });
        }

        await animes.update({ Nombre, Imagen, Sinopsis, Genero, Episodios, Recomendacion });
        res.status(200).json(animes);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

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