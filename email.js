var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremailaddress',
    pass: 'password'
  }
});

var mailOptions = {
  from: 'Your Name',
  to: 'recipient email address',
  subject: 'Sending Email using Node.js',
  text: 'Your Text'
};


callEmail = () => {
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      } 
  });
}
callEmail();
// setInterval(callEmail, 1000); This will send email to the recipient at every second.