const { body } = require("express-validator");

exports.tvshowValidator = [
  body("id")
    .trim()
    .notEmpty()
    .withMessage("ID is missing")
    .isLength({ max: 5 })
    .withMessage("ID can have maximum 5 characters"),
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is missing")
    .isLength({ min: 4 })
    .withMessage("Title must have at least 4 characters")
    .isLength({ max: 50 })
    .withMessage("Title can have maximum 5 characters"),
];