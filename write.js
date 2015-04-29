var mraa = require('mraa');

var digitalPin = 13;
var digitalPin12 = 12;
var digitalPin7 = 7;

var digitalPin = new mraa.Gpio(digitalPin);
var digitalPin12 = new mraa.Gpio(digitalPin12);
var digitalPin7 = new mraa.Gpio(digitalPin7);

digitalPin.dir(mraa.DIR_OUT);
digitalPin12.dir(mraa.DIR_OUT);
digitalPin7.dir(mraa.DIR_OUT);


var state = 0;
var state12 = 0;
var state7 = 0;

setInterval(function(){
		state = 1 - state;
		digitalPin.write(state);
},200);

setInterval(function(){
		state12 = 1 - state12;
		digitalPin12.write(state);
},600);

setInterval(function(){
		state7 = 1 - state7;
		digitalPin7.write(state);
},3000);