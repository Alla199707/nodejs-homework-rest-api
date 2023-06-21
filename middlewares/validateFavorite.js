const { httpError } = require("../helpers");

const validateFavorite = (req, res, next) => {
  if (
    !req.body ||
    Object.keys(req.body).length === 0
  ) {
    throw httpError(
      400,
      "missing field favorite"
    );
  }
  next();
};

module.exports = validateFavorite;
