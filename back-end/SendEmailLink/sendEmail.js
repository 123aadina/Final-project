const nodemailer = require("nodemailer");
const MailgunTransport = require("mailgun-nodemailer-transport");

const sendEmailLink = (toEmail, subject, body) => {
  // create transporter(the mail server) to send and deliver the messages
  const transporter = nodemailer.createTransport({
    service: "Mailgun",
    auth: {
      api_key: "aa4b0867-2cab9a2c",
      domain: "sandbox3ebc2b3f524a48b39151f522f5439abe.mailgun.org	",
    },
  });

  transporter.sendMail({
    from: "womenorganization17@gmail.com",
    to: "toEmail",
    subject: subject,
    html: "<p>Welcome to our organization for women. Click this link to activate your account http://localhost:3000/confirm/"TOKEN"  </p>",
  });
};

//From Mailgun
//Key ID: aa4b0867-2cab9a2c
//Description: API Key
