const express = require("express");
const notFound = require("../controllers/notFound");
const {
  getAllTvshows,
  getTvshow,
  deleteTvshow,
  updateTvshow,
  createTvshow,
} = require("../controllers/tvshows");
const router = express.Router();

router.get("/tvshows", getAllTvshows);
router.get("/tvshows/:id([0-9]+)", getTvshow);
router.delete("/tvshows/:id", deleteTvshow);
router.put("/tvshows/:id", updateTvshow);
router.post("/tvshows", createTvshow);



module.exports = router;
