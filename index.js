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

app.use(tvshowsRouter);

app.get("/", (req, res) => {
  res.json({
    message: "you are at home route :)",
  });
});

router.use('*', notFound);

app.listen(port, () => {
  console.log(`The app is at http://localhost:${port}`);
});
