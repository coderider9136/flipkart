// const mailer = require("nodemailer")


// async function email(param1, param2) {

//     const transport = mailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: "scincefreak60@gmail.com",
//             pass: "xbouxkxndfgoemlv"
//         }


//     })

//     const msg = {
//         from: "scincefreak60@gmail.com",
//         to: param1.email,
//         sub: "forget password",
//         Text: param2

//     }

//     transport.sendMail(msg, (err, info) => {
//         if (err) {
//             return err
//         } else {
//             return "email sent :" + info.response
//         }
//     })


// }

// module.exports = {
//     email
// }

const mailer = require("nodemailer")


async function emailverify(param1, param2, param3) {
    const transport = mailer.createTransport({
        service: "gmail",
        auth: {
            user: "email",
            pass: "passkey"

        }
    })
    const msg = {

        from: "scincefreak60@gmailcom",
        to: param1.email,
        subject: param3,
        text: param2
    }

    transport.sendMail(msg, (error, info) => {
        if (error) {
            return ("error")
        } else {
            return "email sent:" + info.response
        }
    })
}


module.exports = {
    emailverify
}