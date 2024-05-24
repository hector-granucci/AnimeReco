const server = require("./src/app")
const {database} = require("./src/db")


server.listen(3001, async () => {
    await database.sync({ force: true})
    console.log("server nashe")
})