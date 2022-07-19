const nodemailer = require('nodemailer');

exports.sendMail = async(option) => {
    // create transporter object
    const transporter = nodemailer.createTransport({
        // host: process.env.SMTP_HOST,
        // port: process.env.SMTP_PORT,
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        }
    });

    //mail content
    const mailOptions = {
        to: `${option.name} <${option.email}>`,
        from: process.env.MAIL_USER,
        subject: `Seasons Greetings: ${option.subject}`,
        html: `${option.message}`,
    };

    //send mail
    await transporter.sendMail(mailOptions)

}