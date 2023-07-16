const { ctrlWrapper } = require("../../helpers");
const { Contact } = require("../../models");

const listContacts = async (req, res) => {
  console.log(req.user);
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const { _id: owner } = req.user;
  const result = await Contact.find(
    { owner, favorite: true },
    "",
    {
      skip,
      limit,
    }
  );
  res.status(200).json(result);
};

module.exports = ctrlWrapper(listContacts);
