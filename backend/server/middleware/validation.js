const AppError = require("../middleware/AppError");

async function validateTask(req, res, next) {
  const { heading, descriptions } = req.body;

  if (heading.trim() === "") {
    throw new AppError("Title required", 400);
  }

  if (heading.trim().length < 3) {
    throw new AppError("Title cant be less than 3 characters", 400);
  }

  next();
}

async function getGuestId(req, res, next) {
  const guestId = req.headers["x-guest-id"];

  if (!guestId) {
    throw new AppError("Header required", 400);
  }

  req.guestId = guestId;

  next();
}

module.exports = {
  validateTask,
  getGuestId,
};
