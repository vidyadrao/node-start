const fs = require('fs');
const path = require('path');
const readableStream = fs.createReadStream(path.join(__dirname, '../a.js'));
const writableStream = fs.createWriteStream(path.join(__dirname, '../a-unshift.js'));

readableStream.on('open', (v) => {
    console.log(`Opened for reading`);
});

readableStream.on('data', (data) => {
    var arr = data.toString().split('\n');
    writableStream.write(arr[0]);
    writableStream.write("\tLine\n");
    arr.shift()
    readableStream.unshift(Buffer.from(arr.join('\n'), 'utf8'));    
});

readableStream.on('end', () => {
    console.log(`Ended`);                
});