"use strict";
const fs= require('fs');
const path= require('path')
module.exports=(loc, callback) => {
    fs.readdir(loc, (err, files)=> {
        if(err){
            return callback(err);
        }
        let arr=[], counter=0, hasError= false;;
        for(let a of files){
            fs.lstat(path.join(loc, a), (err, stat) => {
                if(hasError)
                    return;
                if(err) {
                    callback(err);
                    hasError= true;
                    return;
                }
               counter++;
               if(stat.isFile()){
                   arr.push(a);
               }
                if(counter== files.length) {
                    callback(err, arr);
                }
            });
        }

    });
}