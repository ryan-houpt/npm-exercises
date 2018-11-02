let sayHello = () => console.log('howdy');
sayHello();

const $ = require('jquery');

$('body').html('Hello World!');

const message = require('./say-hello');

message.niceMessage();
