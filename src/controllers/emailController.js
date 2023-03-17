const email = {}
const nodemailer = require('nodemailer');

email.send =(req, res)=>{

    try{
        /*Gmail
        let transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'jordan.zelaya.r@gmail.com',
            pass: 'clesyiejvqhdlztv\n'
          }
        });
        */
        //Titan email

        let transporter = nodemailer.createTransport({
            host: "smtp.titan.email",
            port: 465,
            secure: true,
            auth: {
                user: "jordan.zelaya@straydog.cloud",
                pass: "Ocita1Vacilante2@",
            },
        });

        /*Verify transporter
        transporter.verify(function(error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log('Server is ready to take our messages');
            }
        });
        */

        let mailOptions = {
            from: 'jordan.zelaya@straydog.cloud', // sender address
            to: [
                req.body.email,
                'jordan.zelayahs@gmail.com'
            ],
            subject: 'Cotización', // Subject line
            text: req.body.nombre + " " + req.body.apellido + " de la empresa: " + req.body.empresa + " desea saber lo siguiente: " + req.body.detalle + ". Su número de telefono es: " + req.body.telefono, // plain text body
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);

        });
    }catch (err){
        console.log("Error")
    }

}

module.exports = email