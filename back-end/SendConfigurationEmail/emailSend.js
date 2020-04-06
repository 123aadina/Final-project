const nodemailer = require("nodemailer");


//create transporter to deliver the messages
const transporter = nodemailer.createTransport({
    host:,
    port:,
    auth:
})