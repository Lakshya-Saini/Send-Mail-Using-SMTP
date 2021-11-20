const nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
const keys = require("../config/keys");

exports.sendEmail = async (req, res) => {
  try {
    const { fromEmail, fromName, subject, message } = req.body;

    let mailOptions = {
      from: `${fromName} <${fromEmail}>`,
      to: `${keys.toEmail}`,
      subject,
      html: message,
    };

    const transporter = nodemailer.createTransport(
      smtpTransport({
        host: keys.emailHost,
        port: 587,
        auth: {
          user: keys.emailAuthUser,
          pass: keys.emailAuthPass,
        },
      })
    );

    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log("error: ", err);
      } else {
        return res
          .status(200)
          .json({ success: true, msg: "Mail sent successfully" });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
