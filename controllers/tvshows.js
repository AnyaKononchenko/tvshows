let tvshows = require("../models/tvshows");

const getAllTvshows = (req, res) => {
  try {
    const { genre } = req.query;
    if (genre) {
      const filtered = tvshows.filter(
        (tvshow) => tvshow.genre.toLowerCase() === genre.toLowerCase()
      );
      return res.json(
        filtered.length > 0
          ? {
              message: `found ${filtered.length} ${genre} shows`,
              tvshows: filtered,
            }
          : {
              message: `there are no shows of ${genre} genre`,
            }
      );
    }

    res.json({
      message: "here are your tv-shows",
      tvshows,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTvshow = (req, res) => {
  try {
    const found = tvshows.find((tvshow) => tvshow.id === Number(req.params.id));
    if (!found) {
      return res.status(404).json({
        message: `there is no show with id:${req.params.id}`,
      });
    }
    res.json({
      message: `here is a show with id:${req.params.id}`,
      tvshow: found,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTvshow = (req, res) => {
  try {
    const found = tvshows.find((tvshow) => tvshow.id === Number(req.params.id));
    if (!found) {
      return res.status(404).json({
        message: `there is no show with id:${req.params.id}`,
      });
    }
    tvshows = tvshows.filter((tvshow) => tvshow.id !== Number(req.params.id));
    res.json({
      message: `you have deleted a show with id:${req.params.id}`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTvshow = (req, res) => {
  try {
    const found = tvshows.find((tvshow) => tvshow.id === Number(req.params.id));
    if (!found) {
      return res.status(400).json({
        message: `a show with id:${req.params.id} doesn't exists`,
      });
    }
    tvshows = tvshows.map((tvshow) =>
      tvshow.id === Number(req.params.id) ? { ...tvshow, ...req.body } : tvshow
    );
    res.json({
      message: `a tv-show with id:${req.params.id} was updated`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTvshow = (req, res) => {
  try {
    const found = tvshows.find((tvshow) => tvshow.id === Number(req.body.id));
    if (found) {
      return res.status(400).json({
        message: `a show with id:${req.body.id} already exists`,
      });
    }
    tvshows.push(req.body);
    res.json({
      message: `you have added a new tv-show`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTvshows,
  getTvshow,
  deleteTvshow,
  updateTvshow,
  createTvshow,
};
