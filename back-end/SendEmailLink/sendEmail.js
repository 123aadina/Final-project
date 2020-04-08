// const nodemailer = require("nodemailer");

//create transporter(the mail server) to send and deliver the messages
// const transporter = nodemailer.createTransport({
//     host:,//email goes here
//     port:,
//   secure is true for not for other ports
//     secure :true,
//     auth:{}
// })

// const emailMessage = {
//     from: "sender@server.com",
//     to: "receiver@sender.com",
//     subject: "Message title",
//     text: "Please click on this link to confirm your registration",
//     html: "<p>HTML version of the message</p>"
//   };

//and since now we have the transporter send emails
// transporter.sendMail(emailMessage,(err,data)=>{
//     if (err){
//         res.json({msg:'fail'})
//     } else {
//         res.json ({msg:})
//     }
// })

// // app.post('/send', (req, res, next) => {
// //     const name = req.body.name
// //     const email = req.body.email
// //     const message = req.body.messageHtml
