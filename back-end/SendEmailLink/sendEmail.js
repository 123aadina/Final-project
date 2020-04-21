const nodemailer = require("nodemailer");
// const MailgunTransport = require("mailgun-nodemailer-transport");

const sendEmailLink = (toEmail, activationToken, username) => {
  // create transporter(the mail server) to send and deliver the messages
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "womenorganization18@gmail.com",
      pass: "hmc17@2020",
    },
  });

  transporter.sendMail({
    from: "womenorganization18@gmail.com",
    to: toEmail,
    subject: "Welcome to Women's organization.",
    html: `<p>Hello ${username}, welcome to Women´ s organization. Click this link to activate your account http://localhost:3000/confirm/${activationToken}  </p>`,
  }),
    function (err, info) {
      if (err) {
        console.log("Error" + err);
      } else {
        console.log("Success!!!");
      }
    };
};

module.exports = { sendEmailLink };
//From Mailgun
//Key ID: aa4b0867-2cab9a2c
//Description: API Key
