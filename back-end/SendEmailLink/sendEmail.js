const nodemailer = require("nodemailer");

const sendEmail = (toEmail, subject, body) => {
  // create transporter(the mail server) to send and deliver the messages
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: "womenorganization17@gmail.com",
      pass: "hmc17@2020",
    },
  });

  const emailMessage = {
    from: "sender@server.com",
    to: toEmail,
    subject: subject,
    text: body,
    html: "<p>HTML version of the message</p>",
  };
  console.log("Message was sent:%");

  // and since now we have the transporter send emails
  transporter.sendMail(emailMessage, (err, data) => {
    if (err) {
      res.json({ msg: "fail" });
    } else {
      res.json({ msg: "send" });
    }
  });
};

//Key ID: aa4b0867-2cab9a2c(Mailgun)
//Description: API Key
