const express = require("express");
const {
  validateBody,
  authenticate,
  isValidId,
} = require("../../middlewares");
const {
  UserModel: { schemasUser },
} = require("../../models");

// const {
//   ctrlUsers,
// } = require("../../controllers");

const {
  users: {
    register,
    login,
    getCurrent,
    logout,
    updateSubscriptionUser,
  },
} = require("../../controllers");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemasUser.registerSchema),
  register
);

router.post(
  "/login",
  validateBody(schemasUser.loginSchema),
  login
);

router.post("/logout", authenticate, logout);

router.get("/current", authenticate, getCurrent);

router.patch(
  "/:id/subscription",
  authenticate,
  isValidId,
  validateBody(
    schemasUser.updateSubscriptionSchema
  ),
  updateSubscriptionUser
);

module.exports = router;
