require("dotenv").config();

module.exports = {
  emailHost: process.env.EMAIL_HOST,
  emailAuthUser: process.env.EMAIL_AUTH_USER,
  emailAuthPass: process.env.EMAIL_AUTH_PASS,
  toEmail: process.env.TO_EMAIL,
};
