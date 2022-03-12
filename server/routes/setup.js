const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
var http = require('http');
var path = require('path');
var fs = require('fs');
var formidable = require('formidable');
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
var settingModel = require('../models/settingModel');
var programModel = require('../models/programModel');

router.get('/', (req, res) => {
	res.render('index.hbs', {
		morris: true
	});
});

router.get('/flot', (req, res) => {
	res.render('flot.hbs', {
		flot: true
	});
});

router.get('/morris', (req, res) => {
	res.render('morris.hbs', {
		morris: true
	});
});

router.get('/tables', (req, res) => {
	res.render('tables.hbs', {
		tables: true
	});
});

router.get('/forms', (req, res) => {
	res.render('forms.hbs', {
		morris: true
	});
});

router.get('/home', (req, res) => {
	res.render('home/home.hbs', {
		//morris: true
	});
});
router.post('/homesetting',cors(),function(req, res) {
	var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
		
        var oldpath = files.banner.filepath;
        var newpath = './public/home/banner' + files.banner.originalFilename;
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
        //   res.write('File uploaded and moved!');
        //   res.end();
		});
		var setting = new settingModel({
       	banner: files.banner.originalFilename,
        metadata: fields.metadata,
        // phone: req.body.phone,
        // course: req.body.course,
        });
        
        setting.save((err, doc) => {
            if (!err)
                {
                res.send({ succes: true });
                } 
            else
                console.log('Error during record insertion : ' + err);
        });
	});
	
});
router.get('/homeBanner/:file(*)', (req, res) => {
    let file = req.params.file;
    let fileLocation = path.join('./public/home/banner/', file);
    //res.send('abc');
	// res.sendFile(`${fileLocation}`)
	res.sendFile(file, { root: __dirname });
})

router.get('/program', (req, res) => {
	res.render('program/program.hbs', {
		morris: true
	});
});
router.post('/programsetting', (req, res) => {
	console.log(req.body)
	var program = new programModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        course: req.body.course,
        });
        
        program.save((err, doc) => {
            if (!err)
                {
                res.send({ succes: true });
                } 
            else
                console.log('Error during record insertion : ' + err);
        });
});

router.post('/enquire', function(req, res){
    var enquiry = new enquiryModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        course: req.body.course,
      });
      enquiry.save((err, doc) => {
            if (!err)
               {
                res.send({ succes: true });
               } 
            else
                console.log('Error during record insertion : ' + err);
      });
});
router.get('/buttons', (req, res) => {
	res.render('buttons.hbs', {
		morris: true
	});
});

router.get('/notifications', (req, res) => {
	res.render('notifications.hbs', {
		morris: true
	});
});

router.get('/typography', (req, res) => {
	res.render('typography.hbs', {
		morris: true
	});
});

router.get('/icons', (req, res) => {
	res.render('icons.hbs', {
		morris: true
	});
});

router.get('/grid', (req, res) => {
	res.render('grid.hbs', {
		morris: true
	});
});

router.get('/blank', (req, res) => {
	res.render('blank.hbs', {
		morris: true
	});
});

router.get('/login', (req, res) => {
	res.render('login.hbs', {
		morris: true
	});
});

module.exports = router;