const express = require('express');
const cors = require('cors');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

//static server
const serverStaticPath = './public';
server.use(express.static(serverStaticPath));

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
    console.log(`Server listening at http://localhost:${serverPort}`);
});
//construir un objeto con los valores data.cardURL data.error data.success

server.post("/card", (req, res) => {
    let card = {
        cardURL: "",
        error: "",
        success: true
    }
    if (req.body.palette !== '' && req.body.photo !== '' && req.body.name !== '' && req.body.job !== '' && req.body.phone !== '' && req.body.email !== '' && req.body.linkedin !== '' && req.body.github !== '') {
        card = {
            cardURL: "localhost:4000",
            success: true
        }
    } else {
        card = {
            error: "rellena los campos",
            success: false
        }
    }
    console.log(card)
    res.json(card)
})
