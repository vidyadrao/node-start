"use strict";
const traverse=require('./traverse.js');

traverse.find(process.argv[2], process.argv[3]).then(data => console.log(`No of files with the match : ${data.length}`)).catch(err => console.log('No files found'+err));
