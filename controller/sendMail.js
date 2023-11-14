const nodeMailer = require('nodemailer');


const sendMail = async(req, res)=>{
    let testAccount = await nodeMailer.createTestAccount();
    let transporter = await nodeMailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: 'tania49@ethereal.email',
            pass: '9tFqwMN3zrQ8UMaZx7'
        }
    });

    let info = await transporter.sendMail({
        from: '"Javed Ahmed" "<javedahmednizamani@gmail.com>" ',
        to: 'javedahmednizamani@gmail.com',
        subject: 'Hello Mr. Javed',
        text: 'Dear Javed',
        html: "<b>Hello Javed Ahmed Nizamani</b>"
    });

    console.log(info.messageId);
    res.json({"Message": info});

}

module.exports = sendMail;
