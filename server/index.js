require("dotenv").config();
const express = require('express');
const massive = require('massive');
const PORT = 31216;
const app = express();






app.use(express.json());






app.listen(PORT, () => {
    console.log(`Live on server port: ${PORT}`);
})
