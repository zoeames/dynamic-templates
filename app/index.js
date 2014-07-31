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

app.get('/rolldice/:a', function(req, res){
  req.params.a*=1;    
   var nums=[];
   var pic=[];
   for (var i = 0; i < req.params.a; i++) {
     var roll = Math.floor(Math.random()*6+1);
     nums.push(roll);
   } 

   for(var j=0; j<nums.length; j++){
     if(nums[j]===1){
     pic[j]='url(/images/dice1.png)';
     }else if(nums[j]===2){
     pic[j]='url(/images/dice2.png)';
     }else if(nums[j]===3){
     pic[j]='url(/images/dice3.png)';
     }else if(nums[j]===4){
     pic[j]='url(/images/dice4.png)';
     }else if(nums[j]===5){
     pic[j]='url(/images/dice5.png)';
     }else{pic[j]='url(/images/dice6.png)';}
   }
   console.log(pic);
  res.render('rolldice',{nums:nums, pic:pic});
});


app.listen(process.env.PORT, function(){
      console.log('hellooooooo...');
});

