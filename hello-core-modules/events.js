const EventEmitter = require('events').EventEmitter;

const ee = new EventEmitter();

ee.on('myEvent', () => console.log('caught@@'));

ee.emit('myEvent');
ee.emit('myEvent');
ee.emit('myEvent');