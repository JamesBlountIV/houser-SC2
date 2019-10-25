require("dotenv").config();
const express = require('express');
const massive = require('massive');
const PORT = 31216;
const controller = require('./controller');
const {CONNECTION_STRING} = process.env;

const app = express();



massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
}).catch(err => console.log(err));

app.use(express.json());

app.get("/api/houses", controller.allHouses);
app.post("/api/post", controller.addHouse);
app.delete("/api/delete/:id", controller.deleteHouse)




app.listen(PORT, () => {
    console.log(`Live on server port: ${PORT}`);
})
