const path = require('path');
const fs = require('fs');


var origin = require.resolve('../allSettled.js');
var destination = origin+'-back1';

const readableStream = fs.createReadStream(origin);
/*

readableStream.on('data', (data) => {
    console.log(data);
    writableStream.write(data);

});

readableStream.on('end', () => {
    console.log("End");
    writableStream.end();
});
*/

const writableStream = fs.createWriteStream(destination);

readableStream.pipe(writableStream);