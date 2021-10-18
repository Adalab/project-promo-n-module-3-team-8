const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const db = new Database("./db/database.db", { verbose: console.log });

// create and config server
const server = express();
server.use(cors());

//static server
const serverStaticPath = "./public";
server.use(express.static(serverStaticPath));

const serverStaticCss = "./static";
server.use(express.static(serverStaticCss));

server.set("view engine", "ejs");
server.use(express.json({ limit: "10mb" }));
// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
//construir un objeto con los valores data.cardURL data.error data.success

server.get("/card/:id", (req, res) => {
  const query = db.prepare(`SELECT * FROM cards WHERE id = ?`);
  const data = query.get(req.params.id);

  res.render("cards", data);
});

server.post("/card", (req, res) => {
  const response = {};
  if (req.body.palette === "") {
    response.error = "Debe escoger la paleta ";
    response.success = false;
  } else if (req.body.name === "") {
    response.error = "Debe indicar su nombre";
    response.success = false;
  } else if (req.body.job === "") {
    response.error = "Debe indicar su trabajo";
    response.success = false;
  } else if (req.body.email === "") {
    response.error = "Debe indicar su email";
    response.success = false;
  } else if (req.body.phone === "") {
    response.error = "Debe indicar su teléfono";
    response.success = false;
  } else if (req.body.photo === "") {
    response.error = "Debe añadir su foto";
    response.success = false;
  } else if (req.body.github === "") {
    response.error = "Debe indicar su github";
    response.success = false;
  } else if (req.body.linkedin === "") {
    response.error = "Debe indicar su linkedIn";
    response.success = false;
  } else {
    const query = db.prepare(
      "INSERT INTO cards ( palette, name, job, email,linkedin, github, phone, photo ) VALUES (?,?,?,?,?,?,?,?)"
    );

    const result = query.run(
      req.body.palette,
      req.body.name,
      req.body.job,
      req.body.email,
      req.body.linkedin,
      req.body.github,
      req.body.tel,
      req.body.image
    );
    response.success = true;
    response.cardURL = `http://localhost:4000/card/${result.lastInsertRowid}`;
  }
  console.log(response);
  res.json(response);
});
