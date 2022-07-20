exports.eMessage = async (name, email, subject, message) => {

const html = `
<!DOCTYPE html>
<html>
    <head>
        <title>Contact Us Response</title>
    </head>
    <body>
        <h2>Sombody wants to get in touch with you!</h2>

        <div>
           <p> Name: ${name} </p>
           <p> Email: ${email} </p>
           <p> Subject: ${subject} </p>
           <p> Message: ${message} </p>
        </div>
    </body>
</html>`

return html;
}