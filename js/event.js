const EventEmmiter = require('events');

class MyEmitter extends EventEmmiter { }
const myEmitter = new MyEmitter('event');

myEmitter.on('event', () => {
    console.log('event fired!');
})
myEmitter.emit('event');