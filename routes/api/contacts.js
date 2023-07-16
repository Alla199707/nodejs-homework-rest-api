const express = require("express");

const {
  validateBody,
  isValidId,
  validateFavorite,
  authenticate,
} = require("../../middlewares");

const {
  schemas,
} = require("../../models/contacts");

// const {
//   listContacts,
//   getContactById,
//   addContact,
//   removeContact,
//   updateContact,
//   updateStatusContact,
// } = require("../../controllers/contacts");

const {
  contacts: {
    listContacts,
    getContactById,
    addContact,
    removeContact,
    updateContact,
    updateStatusContact,
  },
} = require("../../controllers");

const router = express.Router();

router.get("/", listContacts);

router.get(
  "/:contactId",
  authenticate,
  isValidId,
  getContactById
);

router.post(
  "/",
  //authenticate,
  validateBody(schemas.addSchema),
  addContact
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  removeContact
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateFavorite,
  validateBody(schemas.updateFavoriteSchema),
  updateStatusContact
);

module.exports = router;
