'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
      res.render('home');
});


app.get('/checkers', function(req, res){
      res.render('checkers');
});

app.get('/add/:w/:x/:y/:z', function(req, res){
  req.params.w*=1;    
  req.params.x*=1;
  req.params.y*=1;
  req.params.z*=1;

  req.params.fontsize=req.query.fontsize;
  req.params.bcolor=req.query.color;
  req.params.bwid=req.query.borderwidth;

  res.render('sum', req.params);
});

app.get('/sumlist/:a', function(req, res){
  req.params.a=req.params.a.split(',');
  req.params.a=req.params.a.map(function(x){return x*1;});
  req.params.ecolor=req.query.even;
  req.params.ocolor=req.query.odd;
  res.render('sumlist',req.params);
});



app.listen(process.env.PORT, function(){
      console.log('hellooooooo...');
});

