const {
  httpError,
  ctrlWrapper,
} = require("../../helpers");
const { Contact } = require("../../models");

const getContactById = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findById(
    contactId
  );

  if (!result) {
    throw httpError(404, "Not found");
  }

  return res.json(result);
};

module.exports = ctrlWrapper(getContactById);
