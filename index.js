require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const tvshowsRouter = require('./routes/tvshows');
const notFound = require("./controllers/notFound");
const router = express.Router();


const app = express();
const port = process.env.SERVER_PORT || 3002;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static('public'));

app.use(tvshowsRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html')
});

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).sent('Something broke!');
// })

router.use('*', notFound);

app.listen(port, () => {
  console.log(`The app is at http://localhost:${port}`);
});
