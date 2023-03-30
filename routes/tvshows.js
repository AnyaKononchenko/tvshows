const express = require("express");
const {
  getAllTvshows,
  getTvshow,
  deleteTvshow,
  updateTvshow,
  createTvshow,
  addPicture_test,
} = require("../controllers/tvshows");
const router = express.Router();
const upload = require("../middleware/uploadImage");
const validateTvshow = require("../middleware/validateTvshow");
const { tvshowValidator } = require("../validation/tvshow");

const admin = true;

const isAdmin = (req, res, next) => {
  admin ? next() : res.status(403).json({ message: "Access is denied" });
};

router.get("/tvshows", getAllTvshows);
router.get("/tvshows/:id",  getTvshow);
router.delete("/tvshows/:id", deleteTvshow);
router.put("/tvshows/:id", updateTvshow);
router.post("/tvshows", isAdmin, tvshowValidator, validateTvshow, createTvshow);
router.post("/add", isAdmin, upload.single("image"), addPicture_test);

module.exports = router;
