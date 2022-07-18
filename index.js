const express = require('express');
const {config} = require('dotenv');
config();

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`nodemailer project is listening at port: ${PORT}` )
})
