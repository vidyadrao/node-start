"use strict";
const getFiles= require('./getFilesPromise');
getFiles(process.argv[2], (err, files) => {
    if(err){
        console.log(`Error${err}`);
        return;
    }
    console.log(files)
});