const express = require("express");
const cors = require("cors");

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

//static server
const serverStaticPath = "./public";
server.use(express.static(serverStaticPath));

server.use('view engine', 'ejs');
server.use(express.json({ limit: '10mb' }));
// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
//construir un objeto con los valores data.cardURL data.error data.success

server.post("/card", (req, res) => {
  const card = {
    cardURL: "",
    error: "",
    success: true,
  };
  if (
    req.body.palette !== "" &&
    req.body.photo !== "" &&
    req.body.name !== "" &&
    req.body.job !== "" &&
    req.body.phone !== "" &&
    req.body.email !== "" &&
    req.body.linkedin !== "" &&
    req.body.github !== ""
  ) {
    const card = {
      cardURL: "localhost:4000",
      success: true,
    };
  } else {
    const card = {
<<<<<<< HEAD
      error: "rellena los campos",
=======
      error: 'rellena los campos',
>>>>>>> 3a838d14d4da1f42b40bf070e02354679fadc312
      success: false,
    };
  }
  console.log(card);
  res.json(card);
});
