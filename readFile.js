const { readFile, readFileSync } = require('fs');

readFile('./hello.txt', 'utf8', function(err, txt) {
    console.log(txt)
})
console.log('ASAP');