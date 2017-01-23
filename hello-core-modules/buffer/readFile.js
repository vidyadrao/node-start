const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, '../allSettled.js'), "utf-8", (err, fileContent) => {
    if(err){
        console.log(`Error ${err}`);
        return;
    }
    console.log(fileContent);
    

});