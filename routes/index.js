var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'evanarends@yahoo.com',
    pass: 'Seahawks21'
  }
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/about_me',function(req,res,next) {
	res.render('about_me');
});

router.get('/contact',function(req,res,next) {
	res.render('contact');
});

router.post('/contact', function(req,res,next) {
	//send email
	var mailOptions = {
  		from: 'evanarends@yahoo.com',
  		to: 'evanarendss@gmail.com',
  		subject: 'Inquiry From: ' + req.body.name,
  		text: req.body.details + " - Respond to Email: " + req.body.email
	};

	transporter.sendMail(mailOptions, function(error, info){
  		if (error) {
    		console.log(error);
  		} else {
  			res.redirect('/');
 		}
	});

});

module.exports = router;
