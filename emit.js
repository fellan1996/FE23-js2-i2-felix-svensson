const { EventEmitter } = require("stream");
const myEmitter = new EventEmitter();

console.log('Hello world');
process.on('exit', function () {
    console.log("I exited");
})
myEmitter.on('bacon', function () {
    console.log('I love Bacon!')
})
myEmitter.emit('bacon');