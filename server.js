var express           = require('express'),
	morgan 			  = require('morgan'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    sh 				  = require('execSync');
    S                 = require('string');

app.use(bodyParser());
app.use('/js', express.static(__dirname + '/client/js'));
app.use('/', express.static(__dirname + '/client/view/'));
app.use('/', express.static(__dirname + '/'));
app.use('/includes', express.static(__dirname + '/client/view/includes'));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/view/overview.html');
});

app.get('/sub1', function (req, res) {
  res.sendfile(__dirname + '/client/view/sub1.html');
});

app.listen(8082, function() {
  console.log('I\'m Listening...');
})