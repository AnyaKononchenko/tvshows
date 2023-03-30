const notFound = (req, res) => {
  res.status(404).send('This page is not found');
};

module.exports = notFound;