const dev = require('./config');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require("cors");

const tvshowsRouter = require('./routes/tvshows');
const notFound = require("./controllers/notFound");


const app = express();
const port = dev.port;

app.use(cors);
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static('public'));

app.use(tvshowsRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html')
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err) return res.status(500).sent('Something broke!');
})

router.use('*', notFound);

app.listen(port, () => {
  console.log(`The app is at http://localhost:${port}`);
});
