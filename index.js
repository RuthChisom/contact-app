const express = require('express');
const {json} = require('express');
const {config} = require('dotenv');
const {sendMail} = require('./Utils/emailSender');
const {eMessage} = require('./Utils/emailTemplate');
// const SendmailTransport = require('nodemailer/lib/sendmail-transport');

config();

const app = express();
app.use(json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`nodemailer project is listening at port: ${PORT}` )
})

// app.post('/test',(req, res) => {
//     console.log("req=",req);

// })

app.post('/',async(req, res) => {
    // console.log("req=",req.body);
    const {name, email, subject, message} = req.body;
    try{
        if(!name || !email || !subject || !message){
            return res.json('Incomplete Data');
        }
        await sendMail({
            name,
            email,
            subject,
            message: await eMessage(name, email, subject, message)
        })
        res.status(200).json({message: "Email Sent"});
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Email Not Sent"});
    }
})