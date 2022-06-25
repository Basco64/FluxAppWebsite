// const nodemailer = require('nodemailer')

// export default function (req, res) {

//     require('dotenv').config()

//     const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD
//     const EMAIL_ACCOUNT = process.env.EMAIL_ACCOUNT
//     const BASCO_MAIL = process.env.BASCO_MAIL

//     const id = JSON.stringify(req.body.id)
//     const idea = JSON.stringify(req.body.idea)

//     const transporter = nodemailer.createTransport({
//         pool: true,
//         host: "smtp-mail.outlook.com",
//         port: 587,
//         secure: false,
//         auth: {
//             user: EMAIL_ACCOUNT,
//             pass: EMAIL_PASSWORD,
//         }
//     })

//     transporter.verify(function (err, success) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Server is ready to take our messages");
//         }
//     })

//     const mailData = {
//         from: EMAIL_ACCOUNT,
//         to: BASCO_MAIL,
//         subject: `Message From ${id}`,
//         text: idea
//     }

//     let stringMail = mailData;

//     transporter.sendMail(stringMail, (err, info) => {
//         if (err)
//             res.json({ status: "error", data: "Fail sending" })
//         else
//             res.json({ status: "ok", data: info })
//     })

//     res.status(200)
// }

// export const config = {
//     api: {
//         externalResolver: true,
//     },
// }