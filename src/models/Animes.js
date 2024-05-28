const {  DataTypes } = require("sequelize");

const Animes = (database) =>{
database.define("Animes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Imagen: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Sinopsis: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Genero: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Episodios: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    Recomendacion: {
        type: DataTypes.STRING,
        allowNull: true,
    },
},
{
    timestamps: false,
}
);
};

module.exports = Animes