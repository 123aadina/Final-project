const nodemailer = require("nodemailer");


//create transporter to deliver the messages
const transporter = nodemailer.createTransport({
    host:,//email goes here
    port:,
    auth:{}
})

var emailMessage = {
    from: "sender@server.com",
    to: "receiver@sender.com",
    subject: "Message title",
    text: "Please click on this link to confirm your registration",
    html: "<p>HTML version of the message</p>"
  };

//and since now we have the transporter send emails
transporter.sendMail(emailMessage,(err,data)=>{
    if (err){
        res.json({msg:'fail'})
    } else {
        res.json ({msg:})
    }
})