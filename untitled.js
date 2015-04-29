var mraa = require('mraa');

var digitalPin = 13;
var analogPin = 0;

var digitalPin = new mraa.Gpio(digitalPin);
var analogPin = new mraa.Aio(analogPin);

digitalPin.dir(mraa.DIR_OUT);

setInterval(function(){
		console.log(analogPin.read());
},1000);