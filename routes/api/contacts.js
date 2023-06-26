const express = require("express");

const {
  validateBody,
  isValidId,
  validateFavorite,
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
  isValidId,
  getContactById
);

router.post(
  "/",
  validateBody(schemas.addSchema),
  addContact
);

router.delete(
  "/:contactId",
  isValidId,
  removeContact
);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateFavorite,
  validateBody(schemas.updateFavoriteSchema),
  updateStatusContact
);

module.exports = router;
