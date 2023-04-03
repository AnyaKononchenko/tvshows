require("dotenv").config();

const dev = {
  port: process.env.SERVER_PORT || 3002,
}

module.exports = dev;