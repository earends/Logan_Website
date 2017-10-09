var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'evanarends@yahoo.com',
    pass: 'Seahawks21'
  }
});

var mailOptions = {
  from: 'evanarends@yahoo.com',
  to: 'evanarendss@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});