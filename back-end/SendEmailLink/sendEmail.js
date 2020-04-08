const nodemailer = require("nodemailer");

const sendEmailLink = (toEmail, subject, body) => {
  // create transporter(the mail server) to send and deliver the messages
  const transporter = nodemailer.createTransport({
    service: "mailgun",
    secure: false,
    auth: {
      api_key: "aa4b0867-2cab9a2c",
      domain: "sandbox3ebc2b3f524a48b39151f522f5439abe.mailgun.org	",
    },
  });

  //configuring our email details
  const emailMessage = {
    from: "womenorganization17@gmail.com",
    to: toEmail,
    subject: subject,
    text: body,
    html: "<p></p>",
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
