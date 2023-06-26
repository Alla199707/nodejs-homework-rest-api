const {
  httpError,
  ctrlWrapper,
} = require("../../helpers");
const { Contact } = require("../../models");

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndUpdate(
    contactId,
    req.body,
    {
      new: true,
    }
  );

  if (!result) {
    throw httpError(404, "Not found");
  }

  return res.json(result);
};

module.exports = ctrlWrapper(updateStatusContact);
