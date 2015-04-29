/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */
/*global */

/*
A simple node.js application intended to read data from Digital pins on the Intel based development boards such as the Intel(R) Galileo and Edison with Arduino breakout board.

MRAA - Low Level Skeleton Library for Communication on GNU/Linux platforms
Library in C/C++ to interface with Galileo & other Intel platforms, in a structured and sane API with port nanmes/numbering that match boards & with bindings to javascript & python.

Steps for installing MRAA & UPM Library on Intel IoT Platform with IoTDevKit Linux* image
Using a ssh client: 
1. echo "src maa-upm http://iotdk.intel.com/repos/1.1/intelgalactic" > /etc/opkg/intel-iotdk.conf
2. opkg update
3. opkg upgrade

Article: https://software.intel.com/en-us/html5/articles/intel-xdk-iot-edition-nodejs-templates
*/

var mraa = require('mraa'); //require mraa
// console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console

// var myDigitalPin13 = new mraa.Gpio(13); //setup digital read on Digital pin #13 (D13)
// var myDigitalPin7 = new mraa.Gpio(7);
// myDigitalPin13.dir(mraa.DIR_OUT); //set the gpio direction to output
// myDigitalPin7.dir(mraa.DIR_IN);

// periodicActivity(); //call the periodicActivity function

// function periodicActivity() //
// {
//   var myDigitalValue =  myDigitalPin7.read(); //read the digital value of the pin
//   console.log('Gpio is ' + myDigitalValue); //write the read value out to the console
//     myDigitalPin13.write(myDigitalValue); //set the digital pin to high (1)
//   setTimeout(periodicActivity,50); //call the indicated function after 1 second (1000 milliseconds)
// }

var button = new mraa.Gpio(9);
var led    = new mraa.Gpio(8);
var buttonState;

button.dir(mraa.DIR_IN);
led.dir(mraa.DIR_OUT);

setInterval(function(){
	buttonState = button.read();
	console.log("Button State is: " + buttonState);

    if(buttonState){
    	led.write(1);
    }else{
    	led.write(0);
    }

},2000);



