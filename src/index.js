const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const db = new Database('./db/database.db', { verbose: console.log });

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

//static server
const serverStaticPath = './public';
server.use(express.static(serverStaticPath));

const serverStaticCss = './static';
server.use(express.static(serverStaticCss));

server.set('view engine', 'ejs');
server.use(express.json({ limit: '10mb' }));
// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
//construir un objeto con los valores data.cardURL data.error data.success

server.get('/card/:id', (req, res) => {
  const query = db.prepare(`SELECT * FROM cards WHERE id = ?`);
  const data = query.get(req.params.id);

  res.render('cards', data);
});

server.post('/card', (req, res) => {
  const card = {
    cardURL: '',
    error: '',
    success: true,
  };
  if (
    req.body.palette !== '' &&
    req.body.photo !== '' &&
    req.body.name !== '' &&
    req.body.job !== '' &&
    req.body.phone !== '' &&
    req.body.email !== '' &&
    req.body.linkedin !== '' &&
    req.body.github !== ''
  ) {
    const card = {
      cardURL: 'localhost:4000',
      success: true,
    };
  } else {
    const card = {
      error: 'rellena los campos',
      success: false,
    };
  }
  console.log(card);
  res.json(card);
});
