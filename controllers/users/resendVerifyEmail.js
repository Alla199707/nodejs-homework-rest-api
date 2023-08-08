const {
  ctrlWrapper,
  httpError,
  sendEmail,
} = require("../../helpers");
const {
  UserModel: { User },
} = require("../../models");

const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user)
    throw httpError(401, "Email not found");

  if (user.verify)
    throw httpError(
      400,
      "Verification has already been passed"
    );

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.json({
    message: "Verification email sent",
  });
};

module.exports = {
  resendVerifyEmail: ctrlWrapper(
    resendVerifyEmail
  ),
};